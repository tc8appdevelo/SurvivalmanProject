class GroundTile {
    constructor(ops) {
        this.ctx = ops.ctx;
        this.pos = ops.pos;
        // this.width = ops.width;
        // this.height = ops.height;
        // this.style = ops.style;
        // this.greens = ['SpringGreen', 'LawnGreen', 'MediumAquaMarine','DarkGreen', 'ForestGreen', 'SeaGreen'];
        // this.greens = [ 'DarkGreen', 'ForestGreen'];
        // this.browns = ['SaddleBrown', 'Peru', 'Tan', 'NavajoWhite', 'BurlyWood', 'Olive', 'SandyBrown', 'DarkGoldenRod'];
        // this.greys = ['DarkSlateGray', 'SlateGray', 'DimGray', 'Silver', 'DimGray'];
        // this.blues = ['ConrflowerBlue', 'MediumBlue', 'LightSkyBlue', 'MidnightBlue', 'Navy'];

        //this.color = this.randomColor(this.style);

        
        this.bgImage = document.getElementById("bg_dark");
        this.width = this.bgImage.width;
        this.height = this.bgImage.height;
    }
    draw() {
        this.ctx.drawImage(this.bgImage, 0, 0,
            this.width, this.height, this.pos[0], this.pos[1],
            this.width, this.height);
    }
    // draw() {
        
    //     this.ctx.fillStyle = this.color;
    //     this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    // }

    // randomColor(style) {
    //     let color = '';
    //     switch (style) {
    //         case 'green':
    //             color = this.greens[Math.floor(Math.random() * this.greens.length)];
    //             break;
    //         case 'brown':
    //             color = this.browns[Math.floor(Math.random() * this.browns.length)];
    //             break;
    //         case 'grey':
    //             color = this.greys[Math.floor(Math.random() * this.greys.length)];
    //             break;
    //         case 'blue':
    //             color = this.blues[Math.floor(Math.random() * this.blues.length)];
    //             break;
    //         // default:
    //         //     this.color = this.randInt(this.greens.length);
    //     }
    //     return color;
    // }

    // randInt(num) {
    //     return Math.floor(Math.random() * num);
    // }
}

module.exports = GroundTile;