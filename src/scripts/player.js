const Game = require("./game.js");
const Spear = require("./spear.js");
const Water = require("./water.js");
const Food = require("./food.js");

// class Player 
class Player {
    constructor(options) {
        this.game = options.game;
        this.ctx = options.ctx;
        this.pos = options.pos;
        this.vel = options.vel;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.holdingPosition = [this.pos[0] - 22, (this.pos[1] + this.height/2)];

        this.clickedOn = [];
        this.holding = [];
        this.isHolding = false;

        console.log(this.holding);

        this.isMoving = false;
        this.isDrinking = false;
        this.isDay = true;

        this.calories = 2000;
        this.hydration = 100;
        this.bodyTemp = 100;

        this.setUpHtmlTexts();
        
        setInterval(this.incrementHydration.bind(this), 2000);
        setInterval(this.incrementCalories.bind(this), 2000);
        //setInterval(this.incrementBodyTemp.bind(this), 2000);
        addEventListener('keydown', this.keyDownListener.bind(this));
        requestAnimationFrame(this.playerUpdate.bind(this));
    }





    playerUpdate() {
        this.playerHolding();
        requestAnimationFrame(this.playerUpdate.bind(this));
    }

    playerHolding() {
        //console.log(this.holding);
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
            if (this.holding[0] instanceof Food) {
                console.log("instanceof works");
                this.game.foods.push(this.holding[0]);
            }
        }
        this.holding.shift()
    }


    keyDownListener(event) {
        if (event.keyCode == 69 && this.holding[0] instanceof Food) {
            console.log("eating food");
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
    };

    incrementCalories() {
        this.calories -= 100;
        this.caloriesText.innerHTML = `Calories: ${this.calories}`;
    };

    incrementBodyTemp() {
        if (isDay) {
            this.bodyTemp += 5;
            console.log(this.bodyTemp);
        } else {
            this.bodyTemp -= 5;
            console.log(this.bodyTemp);
        }
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
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

        this.pos[0] += (this.vel[0] * deltaTime * 0.3) * unitVectorX;
        this.pos[1] += (this.vel[1] * deltaTime * 0.3) * unitVectorY;

        this.isMoving = true;
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
        console.log(this.holding);
    }


    // I think if its a circle colliding you just have to
    // check if adding the radius or subtracting it from its pos
    // will result in a point that touches the square.
    // probably some way to detect a range easier than writing
    // a bunch more if statements.
    // collisionFromPoint(pos) {
    //     let isCollision = false;
    //     let x = pos[0];
    //     let y = pos[1];

    //     if ((x >= this.x && x <= this.x + this.width)
    //         && (y >= this.y && y <= this.y + this.height)) {
    //         isCollision = true;
    //     }
    //     return isCollision;
    // }

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