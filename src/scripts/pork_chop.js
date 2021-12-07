
class PorkChop {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.width = 16;
        this.height = 22;
        this.color = 'LightCoral';
        this.isCooked = false;
        this.calories = 1000;
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}

module.exports = PorkChop;