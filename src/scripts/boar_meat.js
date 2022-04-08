

class BoarMeat {
    constructor(ctx, pos) {
        this.ctx = ctx;
        this.pos = pos;
        this.isCooked = false;
        this.calories = 1000;

        
        this.uncooked = document.getElementById("boarmeat");
        this.cooked = document.getElementById("boarMeatGrilled");
        this.width = this.uncooked.width;
        this.height = this.uncooked.height;
       
    }



    draw() {

            if (!this.isCooked) {
                this.ctx.drawImage(this.uncooked, 0, 0,
                    this.width, this.height, this.pos[0], this.pos[1],
                    this.width, this.height);
            } else {
                this.ctx.drawImage(this.cooked, 0, 0,
                    this.width, this.height, this.pos[0], this.pos[1],
                    this.width, this.height);
            }
            // this.ctx.fillStyle = 'blue';
            // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    // draw() {
    //     this.ctx.fillStyle = this.color;
    //     this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // }

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

export default BoarMeat;