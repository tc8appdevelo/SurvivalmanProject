class PlayerAnim {
    constructor() {
        
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext('2d');
        this.pos = [44, 44];

        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;
        
        this.x = 0;
        this.y = 0;
        this.srcX = 0;
        this.srcY = 0;
        this.sheetWidth = 128;
        this.sheetHeight = 128;
        this.cols = 4;
        this.rows = 4;
        this.width = 32;
        this.height = 32;
        
        this.characterImage = new Image();
        this.characterImage.src = "../spritesheet_caveman_left.png"
        
        
        this.currentFrame = 0;
        // requestAnimationFrame(this.draw.bind(this));
    }

    updateFrame() {
        this.currentFrame = (this.currentFrame + 1) % this.cols;
        this.srcX = this.currentFrame * this.width;
        if (this.srcX === 96){
            this.srcY += 32;
        }
        if (this.srcY > 96) {
            this.srcY = 0;
        }

    }
    draw() {
        this.updateFrame();
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
        this.ctx.drawImage(this.characterImage, this.srcX, this.srcY, this.width, this.height, this.pos[0], this.pos[1], this.width, this.height);
    }

}

module.exports = PlayerAnim;