const Spear = require("./spear.js");

function Player(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.width = options.width;
    this.height = options.height;
    this.color = options.color;
    this.hydration = 100;
    this.calories = 2000;
    // have this be game over of hypothermia if <= 0,
    // and heat stroke if its >= 200
    this.bodyTemp = 100;
    this.ctx = options.ctx;
    this.isMoving = false;
    // document.addEventListener('keydown', keyDownHandler);
    // document.addEventListener('keyup', keyUpHandler);
}

Player.prototype.draw = function draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
}

Player.prototype.move = function move(deltaTime, dir) {
    this.pos[0] += this.vel[0] * (deltaTime * 0.2) * dir[0];
    this.pos[1] += this.vel[1] * (deltaTime * 0.2) * dir[1];
}

Player.prototype.teleport = function teleport(pos) {
    this.pos[0] = pos[0] - this.width/2;
    this.pos[1] = pos[1] - this.height/2;
}

Player.prototype.moveTo = function moveTo(pos, deltaTime) {

    let moveX = pos[0] - this.pos[0] - this.width/2;
    let moveY = pos[1] - this.pos[1] - this.height/2;

    if (Math.abs(moveX) < 1 && Math.abs(moveY < 1)) {
        this.isMoving = false;
        return;
    }

    let magnitude = Math.sqrt(moveX*moveX + moveY*moveY)
    let unitVectorX = moveX/magnitude;
    let unitVectorY = moveY/magnitude;

    this.pos[0] += (this.vel[0] * deltaTime * 0.3) * unitVectorX;
    this.pos[1] += (this.vel[1] * deltaTime * 0.3) * unitVectorY;

    this.isMoving = true;
}

Player.prototype.middlePosition = function middlePosition() {
    let x = this.pos[0] + this.width/2;
    let y = this.pos[1] + this.height/2;
    let pos = [x, y];
    return pos;
}

// I think if its a circle colliding you just have to
// check if adding the radius or subtracting it from its pos
// will result in a point that touches the square.
// probably some way to detect a range easier than writing
// a bunch more if statements.
Player.prototype.collisionFromPoint = function collisionFromPoint(pos) {
    let isCollision = false;
    let x = pos[0];
    let y = pos[1];
    
    if ((x >= this.x && x <= this.x + this.width) 
        && (y >= this.y && y <= this.y + this.height)) {
            isCollision = true;
        }
    return isCollision;
}

// Player.prototype.createSpear = function createSpear() {
//     this.spear = new Spear({pos: this.pos, 
//                             width: 11, height: 11, vel: 44, 
//                             ctx: this.ctx, player: this});
    
// }


// Player.prototype.throwSpear = function throwSpear(target) {
//     this.spear = new Spear({pos: this.pos, 
//                             width: 11, height: 11, vel: 44, 
//                             ctx: this.ctx, player: this, target: target});
// }

// function keyDownHandler(event) {
//     if (event.keyCode == 32) {
//         throwSpearKeyDown = true;
//         console.log(`Throw spear ${throwSpearKeyDown}`);
//     }
// }
// function keyUpHandler(event) {
//     if (event.keyCode == 32) {
//         throwSpearKeyDown = false;
//         console.log(`Throw spear ${throwSpearKeyDown}`);
//     }
// }


module.exports = Player;