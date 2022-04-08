class HitBox {
    constructor(pos, width, height, followObj) {
        //this.followObj = followObj;
        this.pos = pos;
        this.width = width;
        this.height = height;
    }

    
    draw() {
        this.ctx.fillStyle = 'Orange';
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
        //this.ctx.fillRect(this.followObj.pos[0], this.followObj.pos[1], this.width, this.height);
    }
    
}

export default HitBox;