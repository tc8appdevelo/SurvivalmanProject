// Need this to be on a timer, and to get smaller as the time decreases,
// and get larger as more fuel is added to the fire.
// allow player to put anything into the fire with different funny animations.

class Fire {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        
        this.fireImage = document.getElementById("fire");
        this.width = this.fireImage.width;
        this.height = this.fireImage.height;
        
    }
    draw() {
        this.ctx.drawImage(this.fireImage, 0, 0,
            this.width, this.height, this.pos[0], this.pos[1],
            this.width, this.height);

        
            // this.ctx.fillStyle = 'Maroon';
            // this.ctx.fillRect(this.pos[0], this.pos[1]+this.height, this.width, 18);

    }

    showMiddlePos() {
        let x = this.pos[0] + this.height/2;
        let y = this.pos[1] + this.width/2;
        this.ctx.fillStyle = 'cyan';
        this.ctx.fillRect(x, y, 10, 10);
    }

    middlePos() {
        let x = this.pos[0] + this.width/2;
        let y = this.pos[1] + this.height/2;
        return [x, y];
    }

    
}



module.exports = Fire;