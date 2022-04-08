import { StationaryLeft, StationaryRight } from "./state.js";

class Player {
  constructor(gameWidth, gameHeight) {
    this.spriteSheets = [
      document.getElementById("caveman_left"),
      document.getElementById("caveman_right"),
    ]
    this.states = [
      new StationaryLeft(this),
      new StationaryRight(this),
    ]
    this.image = this.spriteSheets[0];
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.pos = [gameWidth/2, gameHeight/2];
    this.width = 32;
    this.height = 32;
    this.frameX = 0;
    this.frameY = 0;
  }

  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.frameX, this.frameY,
      this.width, this.height,
      this.pos[0], this.pos[1],
      this.width, this.height);
    ctx.fillStyle = "salmon"
    ctx.fillRect(222, 222, 32, 32);
  }
}

export default Player;