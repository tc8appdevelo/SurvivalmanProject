const Player = require("./player.js");
const Fire = require("./fire.js");
const Tree = require("./tree.js");
const Water = require("./water.js");
const Food = require("./food.js");
const Spear = require("./spear.js");
const Boar = require("./boar.js");
const PorkChop = require("./pork_chop.js");

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

        this.boars = [];
        this.waters = [];
        this.foods = [];
        this.wood = [];
        this.spears = [];

        this.fire = new Fire([40,40], [30,20], [20,40], this.ctx);

        document.addEventListener('keydown', keyDownHandler, false);
        document.addEventListener('keyup', keyUpHandler, false);
        document.addEventListener('click', this.mouseDownHandler.bind(this), false);
    }

    start() {
        this.player = this.createPlayer(this, this.ctx);
        this.spear = this.createSpear([222, 222], this.ctx);

        const water = new Water({ pos: [333, 111], radius: 55, ctx: this.ctx });
        this.lastUpdateTime = 0;
        this.waters.push(water);
        this.spawnFoods(5);
        //this.spawnBoars();
        let boar = new Boar(this, this.ctx);
        this.boars.push(boar);
        console.log(this.boars);
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
        for (let i = 0; i < this.boars.length; i++) {
            this.boars[i].draw();

        }

        this.player.draw();
        if (this.player.holding.length > 0) {
            this.player.holding.forEach(function(e) {
                e.draw();
            });
        }
        this.fire.draw();
        this.spear.draw();
    }

    spawnBoars() {
        setInterval(() => {
            let boar = new Boar(this, this.ctx);
            this.boars.push(boar);
        }, 3000);
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

        for (let i = 0; i < this.boars.length; i++) {
            this.boars[i].move(deltaTime);
        }

        if (this.spear.isMoving && !spearClickMoveNeeded) {
            this.spearClickMove(newSpearPosition, deltaTime);
        }

        if (spearClickMoveNeeded) {
            spearClickMoveNeeded = false;
            this.spear.isMoving = true;
            this.spear.isPlayerHolding = false;
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
        this.collisionDetection();

        this.drawGame();

        if (time < 100000) {
            requestAnimationFrame(this.myUpdate.bind(this));
        }
        //requestAnimationFrame(this.myUpdate.bind(this));
    }



    collisionDetection() {
        let x = this.player.middlePosition()[0];
        let y = this.player.middlePosition()[1];

        for (let i = 0; i < this.boars.length; i++) {
            console.log("boar ")
            let b = this.boars[i];
            let s = this.spear;
            let dist = Math.sqrt(Math.pow(s.pos[0]-b.pos[0], 2) + Math.pow(s.pos[1]-b.pos[1], 2));
            console.log(`boar spear dist: ${dist}`);
            if (dist <= (b.width/2 + s.width/2)) {
                let x = b.pos[0];
                let y = b.pos[1];
                let pos = [x,y];
                console.log(`boars length: ${this.boars.length}`);
                this.boars.splice(i, 1);
                console.log(`boars length: ${this.boars.length}`);
            }
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
            if (((x >= food.pos[0]) && x <= (food.pos[0] + food.width)) && 
                ((y >= food.pos[1]) && y <= (food.pos[1] + food.height))) {
                const distance = Math.sqrt(Math.pow(food.pos[0] - playerPos[0], 2) + 
                                            Math.pow(food.pos[1] - playerPos[1], 2));
                if (distance <= this.player.width*2) {
                    this.player.pickUpItem(food);
                    this.foods.splice(i, 1);
                }
                return food;
            }
        }
        if (((x >= this.spear.pos[0]) && x <= (this.spear.pos[0] + this.spear.width)) 
            && ((y >= this.spear.pos[1]) && y <= (this.spear.pos[1] + this.spear.height))) {
            const distance = Math.sqrt(Math.pow(this.spear.pos[0] - playerPos[0], 2) + 
                                            Math.pow(this.spear.pos[1] - playerPos[1], 2));
            if (distance <= this.player.width) {
                this.player.pickUpItem(this.spear);
                
            }
        }
        
    }

}


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


module.exports = Game;

