const Player = require("./player.js");
const Fire = require("./fire.js");
const Tree = require("./tree.js");
const Water = require("./water.js");
const Food = require("./food.js");
const Spear = require("./spear.js");
const Boar = require("./boar.js");
const BoarMeat = require("./boar_meat.js");
const GroundTile = require("./ground_tile.js");
const HitBox = require("./hit_box.js");

let clickedMoveNeeded = false;
let spearThrowPressed = false;
let spearClickMoveNeeded = false;
let newPosition = [0,0];
let newSpearPosition = [0,0];
let isPlayerHolding;

class Game {

    constructor(ctx, canvas) {
        this.canvas = canvas
        this.ctx = ctx;
    }

    start() {
        this.restart();
    }

    restart() {

        this.gameOver = false;

        this.fires = [];
        this.boars = [];
        this.waters = [];
        this.foods = [];
        this.wood = [];
        this.spears = [];
        this.groundTiles = [];
        this.trees = [];

        let fire = new Fire(this.ctx, [200, 400]);
        this.fires.push(fire);


        this.keydownListener = document.addEventListener('keydown', this.keyDownHandler.bind(this), false);
        this.keyupListener = document.addEventListener('keyup', this.keyUpHandler.bind(this), false);
        this.clickListener = document.addEventListener('click', this.mouseDownHandler.bind(this), false);

        this.layGroundTiles(0,0);

        if (this.player) {
            this.player.clearIntervalsForPlayer();
        }
        this.player = this.createPlayer(this, this.ctx);

        this.spear = this.createSpear([222, 222], this.ctx);

        const water = new Water({ pos: [555, 111], radius: 55, ctx: this.ctx });
        this.lastUpdateTime = 0;

        this.waters.push(water);
        
        this.spawnFoods(5);
        //this.spawnBoars();

        

        let boar = new Boar(this, this.ctx);
        this.boars.push(boar);

        this.spawnTrees(3);

        this.drawGame();


        requestAnimationFrame(this.myUpdate.bind(this));
    }

    drawGame() {

        this.ctx.clearRect(0, 0, 800, 800);

        

        for (let i = 0; i < this.groundTiles.length; i++) {
            this.groundTiles[i].draw();
        }
        for (let i = 0; i < this.waters.length; i++) {
            this.waters[i].createWater();
        }

        for (let i = 0; i < this.boars.length; i++) {
            this.boars[i].draw();
        }
        for (let i = 0; i < this.fires.length; i++) {
            this.fires[i].draw();
        }

        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].draw();
        }


        if (this.player.holding.length > 0) {
            this.player.holding.forEach(function(e) {
                e.draw();
            });
        }
        for (let i = 0; i < this.foods.length; i++) {
            this.foods[i].draw();
        }
        this.spear.draw();
        this.player.drawAnim();

    }



    layGroundTiles(x, y) {
        for (let i = 0; i < 6; i++) {
            x = 0;
            
            for (let i = 0; i < 6; i++) {

                let gt = new GroundTile({
                    ctx: this.ctx,
                    pos: [x,y],
                });
                
                this.groundTiles.push(gt);
                x += 99;
            }
            y += 99;
        }   
    }

    spawnBoars() {
        setInterval(() => {
            let boar = new Boar(this, this.ctx);
            this.boars.push(boar);
        }, 10000);
    }

    createFood(pos) {
        const food = new Food(this.ctx, pos);
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

    spawnTrees(num) {
        for(let i = 0; i < num; i++) {

            let tree = this.createTree();
            this.trees.push(tree);
        }
    }

    createTree() {
        let x = Math.floor(Math.random() * 555);
        let y = Math.floor(Math.random() * 555);
        let pos = [x, y];
        const tree = new Tree({
            ctx: this.ctx,
            pos: pos
        });

        return tree;
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
            width: 32,
            height: 32,
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

        let animationID = requestAnimationFrame(this.myUpdate.bind(this));
        if (this.gameOver) {
            cancelAnimationFrame(animationID);
        }
    }



    collisionDetection() {
        let x = this.player.middlePosition()[0];
        let y = this.player.middlePosition()[1];

        for (let i = 0; i < this.boars.length; i++) {

            let b = this.boars[i].middle();
            let boar = this.boars[i];
            let s = this.spear;
            
            let dist = Math.sqrt(Math.pow(s.pos[0]-b[0], 2) + Math.pow(s.pos[1]-b[1], 2));
            if (dist <= (boar.width/2 + s.width/2)) {
                let x = b[0];
                let y = b[1];
                let pos = [x,y];

                this.boars.splice(i, 1);
                let boarMeat = new BoarMeat(this.ctx, pos);
                this.foods.push(boarMeat);
            }
        }

        for (let i = 0; i < this.fires.length; i++) {
            let f = this.fires[i].middlePos();
            let p = this.player.middlePosition();
            let dist = Math.sqrt(Math.pow(f[0]-p[0], 2) + Math.pow(f[1]-p[1], 2));
            if ((dist < this.player.width*2)) {
                this.player.byFire = true;
            } else {
                this.player.byFire = false;
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
        if (clickX < 0) {
            return;
        }

        this.checkClickedOn(pos);
        if (this.player.clickedOn != -1) {
            this.player.distanceFrom(this.player.clickedOn);
        }

        if (!spearThrowPressed) {
            clickedMoveNeeded = true;
            newPosition = [clickX, clickY];
        } else if (this.player.holding[0] === this.spear){
            this.player.holding.shift();
            
            spearClickMoveNeeded = true;
            newSpearPosition = [clickX, clickY];
        }
    }

    checkClickedOn(pos) {
        let x = pos[0];
        let y = pos[1];
        let playerPos = this.player.middlePosition();
        
        for (let i = 0; i < this.fires.length; i++) {
            if (this.player.holding[0] instanceof BoarMeat) {
                
                let f = this.fires[i];
                console.log(f);
                console.log("x " + x);
                console.log("y " + y);
                if ((x >= f.pos[0] && x <= f.pos[0] + f.width) && (y >= f.pos[1] && y <= f.pos[1] + f.height)) {
                    // drop item removes from this.foods array
                    this.player.dropItem();
                    //this.foods[0].moveTo(this.fires[i].middlePos());
                    this.foods[this.foods.length - 1].cook();
                }
            }
        }

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
    keyDownHandler(event) {
        if (event.keyCode == 82) {
            spearThrowPressed = true;
        }
        if (event.keyCode == 68) {
            this.player.dropItem();
        }
    
    }
    keyUpHandler(event) {
        if (event.keyCode == 82) {
            spearThrowPressed = false;
        }
    }

}







module.exports = Game;

