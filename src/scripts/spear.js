

class Spear {
    constructor(options) {
        this.pos = options.pos;
        this.width = options.width;
        this.height = options.height;
        this.vel = options.vel;
        this.ctx = options.ctx;
        this.player = options.player;
        this.color = options.color;
        this.isMoving = false;
        this.isPlayerHolding = false;
        this.clickPos = [0, 0];
        this.checkClick = false;

    }
    
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
    // update(time) {
    //     if (this.isPlayerHolding) {
    //         this.playerHolding();
    //     }
    //     if (this.checkClick) { 
            
    //     }
    //     requestAnimationFrame(this.update.bind(this));
    // }
    playerHolding() {

        let dist = this.distanceFrom(this.player);

        if (dist > 2) {
            this.pos = [this.player.pos[0] - this.width / 2, this.player.pos[1] + this.player.height / 2];
        }

    }
    distanceFrom(obj) {
        let pos = [obj.pos[0] - this.width / 2, obj.pos[1] + obj.height / 2];
        let x = pos[0] - this.pos[0];
        let y = pos[1] - this.pos[1];
        let distance = (Math.sqrt(x * x + y * y));
        return distance;
    }
    move(pos, dt) {

        let moveX = pos[0] - this.pos[0] - this.width / 2;
        let moveY = pos[1] - this.pos[1] - this.height / 2;

        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
            this.isMoving = false;
            return;
        }

        let magnitude = Math.sqrt(moveX * moveX + moveY * moveY);

        let unitVectorX = moveX / magnitude;
        let unitVectorY = moveY / magnitude;

        this.pos[0] += (this.vel[0] * dt * 0.3) * unitVectorX;
        this.pos[1] += (this.vel[1] * dt * 0.3) * unitVectorY;

        this.isMoving = true;
    }
}



export default Spear;