class Food {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.width = 16;
        this.height = 16;
        this.calories = 100;
        
        let colors = ['red', 'orange', 'purple', 'yellow', 'blue'];
        let rand = Math.floor(Math.random() * colors.length);
        this.color = 'red';
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    middlePosition() {
        let x = this.pos[0] + this.width / 2;
        let y = this.pos[1] + this.height / 2;
        let pos = [x, y];
        return pos;
    }
}

module.exports = Food;