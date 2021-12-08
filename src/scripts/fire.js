// Need this to be on a timer, and to get smaller as the time decreases,
// and get larger as more fuel is added to the fire.
// allow player to put anything into the fire with different funny animations.

class Fire {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.b = [40, -80];
        this.c = [80, 0];

        this.colorIdx = 0;

        this.colorArray = ['33ccff','#ff0000', '#ff0d00', '#ff1a00', '#ff2600', '#ff3300', '#ff4000'];

        this.color = 'Yellow';

        // requestAnimationFrame(this.animateFire.bind(this));
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
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();

        this.ctx.fillStyle = this.color;
        this.ctx.fill();
    }

    // animateFire() {
    //     requestAnimationFrame(this.animateFire.bind(this));
    //     this.draw();
    //     if (this.b[1])
    //     this.pos[0] += 5;
    //     this.c[0] -= 5;
    //     this.b[1] += 5;
    //     this.colorIdx += 1;
    // }

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