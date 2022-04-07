const Game = require("./game.js");
const Spear = require("./spear.js");
const Water = require("./water.js");
const Food = require("./food.js");
const BoarMeat = require("./boar_meat.js");

// class Player 
class Player {
    constructor(options) {
        console.log(this);
        this.game = options.game;
        this.ctx = options.ctx;
        this.pos = [222,222];
        this.vel = options.vel;
        this.width = options.width;
        this.height = options.height;
        this.color = '#484848';
        this.holdingPosition = [this.pos[0] - 22, (this.pos[1] + this.height/2)];

        this.clickedOn = [];
        this.holding = [];
        this.isHolding = false;

        console.log(this.holding);

        this.isMoving = false;
        this.isDrinking = false;
        this.isDay = false;
        this.byFire = false;
        this.inShade = false;
        this.calories = 2000;
        this.hydration = 100;
        this.bodyTemp = 100;
        this.x = 0;
        this.y = 0;
        this.srcX = 0;
        this.srcY = 0;
        this.sheetWidth = 128;
        this.sheetHeight = 128;
        this.cols = 4;
        this.rows = 4;

        this.movingLeft = true;
        
        this.characterImageLeft = document.getElementById("caveman_left");
        
        this.characterImageRight = document.getElementById("caveman_right");
        
        this.currentFrame = 0;


        this.setUpHtmlTexts();
        // testing git logged in
        
        
        
        this.hydrationInterval = setInterval(this.incrementHydration.bind(this), 2000);
        this.caloriesInterval = setInterval(this.incrementCalories.bind(this), 2000);
        this.tempInterval = setInterval(this.incrementBodyTemp.bind(this), 2000);
        this.keyd = addEventListener('keydown', this.keyDownListener.bind(this));
        this.animframe = requestAnimationFrame(this.playerUpdate.bind(this));
    }

    clearIntervalsForPlayer() {
        clearInterval(this.hydrationInterval);
        clearInterval(this.caloriesInterval);
        clearInterval(this.tempInterval);
        removeEventListener('keydown', this.keyd);
        cancelAnimationFrame(this.animframe);
        removeEventListener('keydown', this.game.keyDownListener);
    }


    updateFrame() {
        this.currentFrame = (this.currentFrame + 1) % this.cols;
        this.srcX = this.currentFrame * this.width;
        if (this.srcX === 96){
            this.srcY += 32;
        }
        if (this.srcY > 96) {
            this.srcY = 0;
        }

    }
    
    drawAnim() {
        let charImg = this.movingLeft ? this.characterImageLeft : this.characterImageRight

        if (this.isMoving)
            this.updateFrame();
        
        this.ctx.drawImage(charImg, this.srcX, this.srcY, 
            this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    }


    drawStationary() {
        this.ctx.drawImage(this.characterImageLeft, this.srcX, 
            this.srcY, this.width, this.height, this.pos[0], 
            this.pos[1], this.width, this.height);
    }
    drawAnimRight() {
        this.updateFrame();
        this.ctx.drawImage(this.characterImageRight, this.srcX, this.srcY, 
            this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    }


    playerUpdate() {
        this.playerHolding();
        requestAnimationFrame(this.playerUpdate.bind(this));
    }

    playerHolding() {
        if (this.holding.length > 0) {
            let h = this.holding[0];
            let dist = Math.hypot(this.pos[0] - h.pos[0], this.pos[1] - h.pos[1]);
            if (dist > 2) {
                h.pos = [this.pos[0] - h.width / 2, this.pos[1] + this.height / 2];
            }
        }
    }

    pickUpItem(item) {
        if (this.holding.length > 0) {
            this.dropItem();
        }
        this.holding.push(item);
    }

    dropItem() {
        if (this.holding.length > 0) {
            if (this.holding[0] instanceof BoarMeat || this.holding[0] instanceof Food) {
                
                this.game.foods.push(this.holding[0]);
            }
        }
        this.holding.shift()
    }


    keyDownListener(event) {
        if (event.keyCode == 69 && this.holding[0]instanceof BoarMeat) {
            
            this.eatFood();
        } else if (event.keyCode == 69 && this.holding[0] instanceof Food) {
            
            this.eatFood();
        }
    }

    incrementHydration() {
        if (!this.isDrinking) {
            this.hydration -= 5;
        } else {
            this.hydration += 10;
        }
        this.hydrationText.innerHTML = `Hydration: ${this.hydration}`;
        if (this.hydration <= 0) {
            this.gameOver();
        }
    };


    gameOver() {
        this.clearIntervalsForPlayer();
        this.game.gameOver = true;
    }

    incrementCalories() {
        this.calories -= 100;
        this.caloriesText.innerHTML = `Calories: ${this.calories}`;
        if (this.calories <= 0) {
            this.clearIntervalsForPlayer();
            this.gameOver();
        }
    };

    incrementBodyTemp() {
        if (this.isDay) {
            if (this.inShade) {
                this.bodyTemp -= 5;
                
            } else {
                this.bodyTemp += 5;
            } 
        } else {
            if (this.byFire) {
                this.bodyTemp += 10;
                if (this.bodyTemp > 100) {
                    this.bodyTemp = 100;
                }
            }
            else {
                this.bodyTemp -= 5;
                
            }
        }
        this.tempText.innerHTML = `Body Temp: ${this.bodyTemp}`;

        if (this.bodyTemp <= 0 || this.bodyTemp >= 200) {
            this.gameOver();
        }
    }

    move(deltaTime, dir) {
        this.pos[0] += this.vel[0] * (deltaTime * 0.2) * dir[0];
        this.pos[1] += this.vel[1] * (deltaTime * 0.2) * dir[1];
    }
    teleport(pos) {
        this.pos[0] = pos[0] - this.width / 2;
        this.pos[1] = pos[1] - this.height / 2;
    }
    moveTo(pos, deltaTime) {

        let moveX = pos[0] - this.pos[0] - this.width / 2;
        let moveY = pos[1] - this.pos[1] - this.height / 2;

        if (Math.abs(moveX) < 1 && Math.abs(moveY < 1)) {
            this.isMoving = false;
            return;
        }

        let magnitude = Math.sqrt(moveX * moveX + moveY * moveY);
        let unitVectorX = moveX / magnitude;
        let unitVectorY = moveY / magnitude;

        let xMove = (this.vel[0] * deltaTime * 0.3) * unitVectorX;
        let yMove = (this.vel[1] * deltaTime * 0.3) * unitVectorY;

        this.pos[0] += xMove;
        this.pos[1] += yMove;

        


        if (xMove <= 0) {
            this.movingLeft = true;
        } else {
            this.movingLeft = false;
        }
        this.isMoving = true;

        // if (this.pos[0] > 500) {
        //     this.game.waters[0].pos[0] -= xMove;
        //     //this.game.waters[0].pos[1] += yMove;
        // }
    }

    middlePosition() {
        let x = this.pos[0] + this.width / 2;
        let y = this.pos[1] + this.height / 2;
        let pos = [x, y];
        return pos;
    }

    setUpHtmlTexts() {
        this.hydrationText = document.getElementById("hydration-text");
        this.caloriesText = document.getElementById("calories-text");
        this.tempText = document.getElementById("temp-text");
        this.hydrationText.innerHTML = `Hydration: ${this.hydration}`;
        this.caloriesText.innerHTML = `Calories: ${this.calories}`;
        this.tempText.innerHTML = `Temp: ${this.bodyTemp}`;
    }

    eatFood() {
        console.log("eating food!");
        this.calories += this.holding[0].calories;
        this.setUpHtmlTexts();
        this.holding.shift();
        this.game.drawGame();
        
    }

    collisionDetection() {
        let x = this.middlePosition()[0];
        let y = this.middlePosition()[1];
        let drinking = false;
        for (let i = 0; i < this.game.waters.length; i++) {
            let w = this.game.waters[i];
            let distance = Math.sqrt(Math.pow(x - w.pos[0], 2) + Math.pow(y - w.pos[1], 2));

            if (distance <= (w.radius + this.width / 2)) {
                drinking = true;
            }
        }
        this.isDrinking = drinking;
        return drinking;
    }

}

module.exports = Player;