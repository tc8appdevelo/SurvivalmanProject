// Need this to be on a timer, and to get smaller as the time decreases,
// and get larger as more fuel is added to the fire.
// allow player to put anything into the fire with different funny animations.

class Fire {
    constructor(aPos, bPos, cPos, ctx) {
        this.a = aPos;
        this.b = bPos;
        this.c = cPos;
        this.ctx = ctx;
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.a[0], this.a[1]);
        this.ctx.lineTo(this.b[0], this.b[1]);
        this.ctx.lineTo(this.c[0], this.c[1]);
        this.ctx.closePath();

        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = 'yellow';
        this.ctx.stroke();

        this.ctx.fillStyle = 'OrangeRed';
        this.ctx.fill();
    }

    
}



module.exports = Fire;