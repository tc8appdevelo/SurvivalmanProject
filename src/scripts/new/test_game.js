import Player from "./player.js";

class TestGame {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = new Player(canvas.width, canvas.height);
    this.groundColor = '#e4cda7';
  }

  start() {
    this.drawGame();
  }

  drawGame() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGround();
    this.player.draw(this.ctx);

  }

  drawGround() {
    this.ctx.fillStyle = this.groundColor;
    this.ctx.fillRect(0, 0, 222, 222);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(222, 222, 222, 222);
    this.ctx.fillStyle = this.groundColor;
    this.ctx.fillRect(444, 444, 222, 222);
  }

}

export default TestGame;