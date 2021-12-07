class Wood {
    constructor(options) {
        this.pos = options.pos;
        this.width = options.width;
        this.height = options.height;
        this.ctx = options.ctx;

        let colors = ['Peru', 'SaddleBrown', 'Sienna', 
                        'brown', 'DarkGoldenRod'];
        this.color = Math.floor(Math.random() * colors.length);
        this.pos[0] = Math.floor(Math.random() * 600);
        this.pos[1] = Math.floor(Math.random() * 600);
        this.width = Math.floor(Math.random() * (66-33) + 33);
        this.height = Math.floor(Math.random() * (44-11) + 11);



        this.color = colors[randColor];
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
    }
}