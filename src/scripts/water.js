class Water {
    constructor(options) {
        this.pos = options.pos;
        this.radius = options.radius;
        this.ctx = options.ctx;
        this.color = 'DarkSlateBlue';
    }
    createWater() {
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // evaporate() {
    //     if (this.radius > 5) {
    //         this.radius -= 5;
    //     }
    // }
}





module.exports = Water;



