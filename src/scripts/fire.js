// Need this to be on a timer, and to get smaller as the time decreases,
// and get larger as more fuel is added to the fire.
// allow player to put anything into the fire with different funny animations.

class Fire {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.b = [40, -80];
        this.c = [80, 0];
    }
    draw() {
        let x = this.pos[0];
        let y = this.pos[1];

        this.ctx.beginPath();
        
        this.ctx.moveTo(this.pos[0], this.pos[1]);
        this.ctx.lineTo(this.b[0]+x, this.b[1]+y);
        this.ctx.lineTo(this.c[0]+x, this.c[1]+y);
        this.ctx.closePath();

        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.stroke();

        this.ctx.fillStyle = 'OrangeRed';
        this.ctx.fill();
    }

    showMiddlePos() {
        let x = this.pos[0] + this.c[0]/2;
        let y = this.pos[1] + this.b[1]/2;
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(x, y, 10, 10)
    }

    middlePos() {
        let x = this.pos[0] + this.c[0]/2;
        let y = this.pos[1] + this.b[1]/2;
        return [x, y];
    }

    
}



module.exports = Fire;