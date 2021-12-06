function Spear(options) {
    this.pos = options.pos;
    this.width = options.width;
    this.height = options.height;
    this.vel = options.vel;
    this.ctx = options.ctx;
    this.player = options.player;
    this.color = options.color;
    this.isMoving = false;
    this.isPlayerHolding = true;

    requestAnimationFrame(this.update.bind(this));
}

Spear.prototype.draw = function draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
}

Spear.prototype.update = function update(time) {
    if (this.isPlayerHolding) {
        this.playerHolding();
    }
    requestAnimationFrame(this.update.bind(this));
}

// Spear.prototype.playerMidpoint = function playerMidpoint() {
//     return [this.player.pos[0] + this.player.width/2, 
//             this.player.pos[1] + this.player.height/2];
// }

Spear.prototype.playerHolding = function playerHolding() {

    let dist = this.distanceFrom(this.player.pos);
        
    if (dist > 2) {
        console.log(dist);
        this.pos = [this.player.pos[0] - this.width/2, this.player.pos[1] + this.player.height/2];
    }

}

Spear.prototype.distanceFrom = function distanceFrom() {
    let pos = [this.player.pos[0] - this.width/2, this.player.pos[1] + this.player.height/2];
    let x = pos[0] - this.pos[0];
    let y = pos[1] - this.pos[1];
    let distance = (Math.sqrt(x*x + y*y));
    return distance;
}

Spear.prototype.move = function move(pos, dt) {

    let moveX = pos[0] - this.pos[0] - this.width/2;
    let moveY = pos[1] - this.pos[1] - this.height/2;

    if (Math.abs(moveX) < 1 && Math.abs(moveY) < 1) {
        this.isMoving = false;
        return;
    }

    let magnitude = Math.sqrt(moveX * moveX + moveY * moveY);

    let unitVectorX = moveX/magnitude;
    let unitVectorY = moveY/magnitude;

    this.pos[0] += (this.vel[0] * dt * 0.3) * unitVectorX;
    this.pos[1] += (this.vel[1] * dt * 0.3) * unitVectorY;

    this.isMoving = true;
}

module.exports = Spear;