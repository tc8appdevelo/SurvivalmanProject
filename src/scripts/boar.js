

class Boar {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.pos = [Math.floor(Math.random() * 555),
                    Math.floor(Math.random() * 555)];

        this.image = new Image();
        this.image.src = "../boar_left.png"
        this.width = this.image.width;
        this.height = this.image.height;
        

        this.setMovement();

        this.moving = true;


        
        setInterval(this.setMovement.bind(this), this.timeMoving);
        //requestAnimationFrame(this.update.bind(this));
    }

    draw() {
        this.ctx.drawImage(this.image, 0, 0,
            this.width, this.height, this.pos[0], this.pos[1],
            this.width, this.height);
            // this.ctx.fillStyle = 'blue';
            // this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }

    // draw() {
    //     this.ctx.fillStyle = this.color;
    //     this.ctx.fillRect(this.pos[0], this.pos[1],
    //         this.width, this.height);
    // }

    move(deltaTime) {
        if (this.timeMoving > 0) {
            this.pos[0] += (this.speed * deltaTime) * this.unitVector[0];
            this.pos[1] += (this.speed * deltaTime) * this.unitVector[1];
        }
    }

    setMovement() {
        let xRandom = Math.random() * 99;
        let yRandom = Math.random() * 99;
        let magnitude = Math.sqrt(xRandom*xRandom + yRandom*yRandom);

        let xNormalize = xRandom / magnitude;
        let yNormalize = yRandom / magnitude;

        let unitVector = [xNormalize, yNormalize];

        this.timeMoving = ((Math.random() * 4) + 1) * 1000;
        let speed = Math.floor((Math.random() * 6) + 1);
        if (speed % 2 === 0) {
            this.speed = speed * -1;
        } else {
            this.speed = speed;
        }

        this.unitVector = unitVector;
        return this.timeMoving;
    }


}

module.exports = Boar;