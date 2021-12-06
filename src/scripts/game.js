const Player = require("./player.js");
const Water = require("./water.js");
const Food = require("./food.js");
const Spear = require("./spear.js");
// setInterval
let clickedMoveNeeded = false;
let spearThrowPressed = false;
let isPlayerHolding;
let spearClickMoveNeeded = false;
let newPosition = [0,0];
let newSpearPosition = [0,0];

class Game {
    constructor(ctx) {

        this.canvas = document.querySelector('canvas');
        this.ctx = ctx;
        this.waters = [];
        this.foods = [];
        this.spears = [];

        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);
        document.addEventListener('click', this.mouseDownHandler.bind(this), false);
    }

    start() {
        this.player = this.createPlayer(this, this.ctx);
        this.spear = this.createSpear([222, 222], this.ctx);

        const water = new Water({ pos: [333, 111], radius: 55, ctx: this.ctx });
        this.waters.push(water);

        this.spawnFoods(5);

        this.lastUpdateTime = 0;
        //isPlayerHolding = this.spear.isPlayerHolding;
        //onsole.log(isPlayerHolding);
        this.drawGame();
        requestAnimationFrame(this.myUpdate.bind(this));
    }

    drawGame() {
        this.ctx.clearRect(0, 0, 800, 800);
        for (let i = 0; i < this.waters.length; i++) {
            this.waters[i].createWater();
        }
        for (let i = 0; i < this.foods.length; i++) {
            this.foods[i].draw();
        }
        this.player.draw();
        this.spear.draw();
    }

    createFood(pos) {
        const food = new Food({
            ctx: this.ctx,
            pos: pos,
            width: 16,
            height: 16,
            player: this.player
        });
        return food;
    }

    spawnFoods(num) {
        for(let i = 0; i < num; i++) {
            let x = Math.floor(Math.random() * 555);
            let y = Math.floor(Math.random() * 555);

            let pos = [x, y];
            let food = this.createFood(pos);
            this.foods.push(food);
        }
    }

    createSpear(pos, ctx) {
        const spear = new Spear({
            pos: pos,
            vel: [77, 77],
            width: 22,
            height: 22,
            color: '#666699',
            player: this.player,
            ctx: ctx
        });
        return spear;
    }

    createPlayer(game, ctx) {
        const player = new Player({
            game: game,
            ctx: ctx,
            pos: [44, 44],
            vel: [44, 44],
            width: 44,
            height: 44,
            color: '#404040'
        });
        return player;
    }

    myUpdate(time) {
        const deltaTime = (time - this.lastUpdateTime) / 100;
        this.lastUpdateTime = time;

        if (this.spear.isMoving && !spearClickMoveNeeded) {
            this.spearClickMove(newSpearPosition, deltaTime);
        }
        console.log(this.player.holding[0] === this.spear);
        if (spearClickMoveNeeded) {
            //this.player.holding.shift();
            spearClickMoveNeeded = false;
            this.spear.isMoving = true;
            this.spear.isPlayerHolding = false;
            // this.spear.isPlayerHolding = false;
            // this.player.isHolding = false;
            this.spearClickMove(newSpearPosition, deltaTime);
        }

        if (this.player.isMoving && !clickedMoveNeeded) {
            this.mouseClickMove(newPosition, deltaTime);
        }

        if (clickedMoveNeeded) {
            clickedMoveNeeded = false;
            this.player.isMoving = true;
            this.mouseClickMove(newPosition, deltaTime);
        }

        this.player.collisionDetection();

        if (time < 100000) {
            requestAnimationFrame(this.myUpdate.bind(this));
        }
        //requestAnimationFrame(this.myUpdate.bind(this));
    }



    collisionDetection() {
        let x = this.player.middlePosition()[0];
        let y = this.player.middlePosition()[1];

        for (let i = 0; i < this.waters.length; i++) {
            let w = this.waters[i];
            let distance = Math.sqrt(Math.pow(x - w.pos[0], 2) + Math.pow(y - w.pos[1], 2));

            if (distance <= (w.radius + this.player.width / 2))
                console.log(`player drinking water: ${distance}`);
            return (distance <= (w.radius + this.player.width / 2));
        }
    }

    mouseClickMove(pos, dt) {
        this.player.moveTo(pos, dt);
        this.drawGame();
    }
    spearClickMove(pos, dt) {
        this.spear.move(pos, dt);
        this.drawGame();
    }

    mouseDownHandler(event) {
        this.player.clickedOn = -1;
        let canvasBounds = canvas.getBoundingClientRect();
        let clickX = event.pageX - canvasBounds.left;
        let clickY = event.pageY - canvasBounds.top;
        let pos = [clickX, clickY];

        this.checkClickedOn(pos);
        if (this.player.clickedOn != -1) {
            console.log(this.player.distanceFrom(this.player.clickedOn));
            this.player.distanceFrom(this.player.clickedOn);
        }
        
        
        if (!spearThrowPressed) {
            clickedMoveNeeded = true;
            newPosition = [clickX, clickY];
        } else if (this.player.holding[0] === this.spear){
            this.player.holding.shift();
            isPlayerHolding = false;
            spearClickMoveNeeded = true;
            newSpearPosition = [clickX, clickY];
        }
    
    }

    checkClickedOn(pos) {

        let x = pos[0];
        let y = pos[1];
        let playerPos = this.player.middlePosition();
        for (let i = 0; i < this.foods.length; i++) {
            let food = this.foods[i];
            if (((x >= food.pos[0]) && x <= (food.pos[0] + food.width)) && ((y >= food.pos[1]) && y <= (food.pos[1] + food.height))) {

                console.log(`Clicked on food: ${food}`);
                
                //console.log(playerPos);
                const distance = Math.sqrt(Math.pow(food.pos[0] - playerPos[0], 2) + 
                                            Math.pow(food.pos[1] - playerPos[1], 2));
                //console.log(distance);
                //this.player.clickedOn = food;
                if (distance <= this.player.width*2) {
                    this.player.holding = [];
                    this.player.holding.push(food); 
                }
                return food;
            }
        }
        if (((x >= this.spear.pos[0]) && x <= (this.spear.pos[0] + this.spear.width)) && ((y >= this.spear.pos[1]) && y <= (this.spear.pos[1] + this.spear.height))) {
            const distance = Math.sqrt(Math.pow(this.spear.pos[0] - playerPos[0], 2) + 
                                            Math.pow(this.spear.pos[1] - playerPos[1], 2));
            console.log(distance);
            if (distance <= this.player.width) {
                console.log("hit spear and close")
                if (this.player.holding.length > 0) {
                    this.player.holding = [];
                }
                this.player.holding.push(this.spear);
            }
        }
        //return false;
    }

}






// function mouseDownHandler(event) {
//     let canvasBounds = canvas.getBoundingClientRect();
//     let clickX = event.pageX - canvasBounds.left;
//     let clickY = event.pageY - canvasBounds.top;

//     // console.log("mouse down");
//     // console.log("X: " + clickX + "  Y: " + clickY);



//     if (!spearThrowPressed) {
//         clickedMoveNeeded = true;
//         newPosition = [clickX, clickY];
//     } else if (isPlayerHolding){
//         isPlayerHolding = false;
//         spearClickMoveNeeded = true;
//         newSpearPosition = [clickX, clickY];
//     }

// }


function keyDownHandler(event) {
    if (event.keyCode == 32) {
        spearThrowPressed = true;
    }
    if (event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }

    if (event.keyCode == 40) {
        downPressed = true;
    }
    else if(event.keyCode == 38) {
        upPressed = true;
    }
}
// minigame part to make not only throwing spear at something for food,
// can knock down fruit or coconuts from trees with same motion
// as the click and drag bow and arrow or spear throw motion
// could be a boomerang or a spear shoots like that old web bow game.
function keyUpHandler(event) {
    if (event.keyCode == 32) {
        spearThrowPressed = false;
    }
    if (event.keyCode == 39) {
        rightPressed = false;
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
    }

    if (event.keyCode == 40) {
        downPressed = false;
    }
    else if(event.keyCode == 38) {
        upPressed = false;
    }
}
// Game.prototype.moveIfKeyDown = function moveIfKeyDown(dt) {
//     if (rightPressed === true) {
//         this.ctx.clearRect(0, 0, 800, 800);
//         this.player.move(dt, [1,0]);
//         this.player.draw(this.ctx);
//     }
//     if (leftPressed === true) {
//         this.ctx.clearRect(0, 0, 800, 800);
//         this.player.move(dt, [-1, 0]);
//         this.player.draw(this.ctx);
//     }
//     if (upPressed === true) {
//         this.ctx.clearRect(0, 0, 800, 800);
//         this.player.move(dt, [0, -1]);
//         this.player.draw(this.ctx);
//     }
//     if (downPressed === true) {
//         this.ctx.clearRect(0, 0, 800, 800);
//         this.player.move(dt, [0, 1]);
//         this.player.draw(this.ctx);
//     }
// }

module.exports = Game;

