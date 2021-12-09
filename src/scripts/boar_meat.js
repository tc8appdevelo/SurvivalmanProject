

class BoarMeat {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.isCooked = false;
        this.calories = 1000;
        this.width = 44;
        this.height = 22;
        this.color = "Coral";
        // this.uncookedImage = new Image();
        // this.image = document.getElementById("boarmeat");
        // this.width = this.image.width;
        // this.height = this.image.height;
       
    }

    // draw() {
    //     this.ctx.drawImage(this.uncookedImage, 0, 0,
    //         this.width, this.height, this.pos[0], this.pos[1],
    //         this.width, this.height);
    //         // this.ctx.fillStyle = 'blue';
    //         // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    cook() { 
        console.log("cook ran") 
        setTimeout(this.switchToCooked.bind(this), 5000);
    }
    switchToCooked() {
        console.log("timeout ran")
        this.color = 'brown';
        this.isCooked = true; 
    }
}

module.exports = BoarMeat;