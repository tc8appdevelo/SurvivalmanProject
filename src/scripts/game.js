const Player = require("./player.js");
const Water = require("./water.js");
const Spear = require("./spear.js");

var clickedMoveNeeded = false;
var spearThrowPressed = false;
var spearClickMoveNeeded = false;
var newPosition = [0,0];
var newSpearPosition = [0,0];

function Game(ctx) {
    this.canvas = document.querySelector('canvas');
    this.ctx = ctx;
    this.waters = [];
    this.spears = [];
    
    document.addEventListener('keydown', keyDownHandler, false);
    document.addEventListener('keyup', keyUpHandler, false);
    document.addEventListener('mousedown', mouseDownHandler, false);
}

Game.prototype.start = function start() {
    this.player = this.createPlayer([44,44], this.ctx);
    this.spear = this.createSpear([44,44], this.ctx);
    const water = new Water({pos: [333,111], radius: 55, ctx: this.ctx});
    this.waters.push(water);
    this.lastUpdateTime = 0;

    this.drawGame();
    requestAnimationFrame(this.myUpdate.bind(this));
}

Game.prototype.drawGame = function drawGame() {
    this.ctx.clearRect(0,0,800,800);
    for (let i = 0; i < this.waters.length; i++) {
        this.waters[i].createWater();
    }

    this.player.draw();
    this.spear.draw();
}

Game.prototype.createSpear = function createSpear(pos, ctx) {
    const spear = new Spear({
        pos: pos,
        vel: [22, 22],
        width: 11,
        height: 11,
        color: '#666699',
        player: this.player,
        ctx: ctx
    });
    return spear;
}

Game.prototype.createPlayer = function createPlayer(pos, ctx) {
    const player = new Player({
        pos: [44,44],
        vel: [22, 22],
        width: 44,
        height: 44,
        color: '#404040',
        ctx: ctx
    });
    return player;
}
Game.prototype.myUpdate = function myUpdate(time) {
    const deltaTime = (time - this.lastUpdateTime)/100;
    this.lastUpdateTime = time;

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

    this.collisionDetection();

    if (time < 100000) {
        requestAnimationFrame(this.myUpdate.bind(this));
    }
    //requestAnimationFrame(this.myUpdate.bind(this));
}

Game.prototype.collisionDetection = function collisionDetection() {
    let x = this.player.middlePosition()[0];
    let y = this.player.middlePosition()[1];

    for (let i = 0; i < this.waters.length; i++) {
        let w = this.waters[i];
        let distance = Math.sqrt(Math.pow(x-w.pos[0], 2) + Math.pow(y-w.pos[1], 2));

        if (distance <= (w.radius + this.player.width/2))
            console.log(`player drinking water: ${distance}`);
        return (distance <= (w.radius + this.player.width/2));
    }
}

function mouseDownHandler(event) {
    var canvasBounds = canvas.getBoundingClientRect();
    var clickX = event.pageX - canvasBounds.left;
    var clickY = event.pageY - canvasBounds.top;

    // console.log("mouse down");
    // console.log("X: " + clickX + "  Y: " + clickY);



    if (!spearThrowPressed) {
        clickedMoveNeeded = true;
        newPosition = [clickX, clickY];
    } else {
        spearClickMoveNeeded = true;
        newSpearPosition = [clickX, clickY];
    }

}

Game.prototype.mouseClickMove = function mouseClickMove(pos, dt) {
    this.player.moveTo(pos, dt);
    this.drawGame();
}
Game.prototype.spearClickMove = function spearClickMove(pos, dt) {
    this.spear.move(pos, dt);
    this.drawGame();
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

