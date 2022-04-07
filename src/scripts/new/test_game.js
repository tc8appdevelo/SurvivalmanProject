
class TestGame {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.groundColor = '#e4cda7';
  }

  start() {
    this.drawGame();
  }

  drawGame() {
    this.drawGround();
  }

  drawGround() {
    this.ctx.fillStyle = this.groundColor;
    this.ctx.fillRect(0, 0, 222, 222);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(222, 222, 222, 222);
  }

}

module.exports = TestGame;