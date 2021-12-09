class Tree {
    constructor(ops) {
        this.ctx = ops.ctx;
        this.pos = ops.pos;
        this.topColor = 'Green';
        this.trunkColor = 'Brown';
        
        this.treeImage = document.getElementById("tree")
        this.width = this.treeImage.width;
        this.height = this.treeImage.height;

    }



    draw() {
        this.ctx.drawImage(this.treeImage, 0,0, this.width, this.height, 
            this.pos[0], this.pos[1], this.width, this.height);
    }

    // showMiddlePos() {
    //     let x = this.pos[0];
    //     let y = this.pos[1] + this.height/2;
    //     this.ctx.fillStyle = 'cyan';
    //     this.ctx.fillRect(x, y, 10, 10)
    // }

    // middlePos() {
    //     let x = this.pos[0];
    //     let y = this.pos[1] + this.height/2;
    //     return [x, y];
    // }

    // drawTop() {
    //     this.ctx.fillStyle = this.topColor;
    //     this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI*2);
    //     this.ctx.fill();
    //     this.ctx.closePath();
    // }
    // drawTrunk() {
    //     this.ctx.fillStyle = this.trunkColor;
    //     this.ctx.fillRect(this.pos[0]-this.width/2, this.pos[1], this.width, this.height);
    // }
}

module.exports = Tree;