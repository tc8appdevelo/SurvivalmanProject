class Tree {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.radius = 22;
        this.width = 22;
        this.height = 88;
        this.topColor = 'green';
        this.trunkColor = 'brown';
    }

    drawTop() {
        this.ctx.fillStyle = this.topColor;
        this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);
        this.ctx.fill();
    }
    drawTrunk() {
        this.ctx.fillStyle = this.trunkColor;
        this.ctx.fillRect(this.pos[0]+this.width/2, this.pos[1], this.width, this.height);
    }

    draw() {
        this.drawTrunk();
        this.drawTop();
    }

    showMiddlePos() {
        let x = this.pos[0];
        let y = this.pos[1] + this.height/2;
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(x, y, 10, 10)
    }

    middlePos() {
        let x = this.pos[0];
        let y = this.pos[1] + this.height/2;
        return [x, y];
    }
}

module.exports = Tree;