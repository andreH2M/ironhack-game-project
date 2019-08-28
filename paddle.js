class Paddle {
  constructor(game, side) {
    this.game = game;
    this.side = side;
    this.ctx = game.ctx
    // this.x = 0;
    this.y = 30;
    this.dy = 50;
    this.height = 300;
    this.width = 15;
    this.color = "white"
  }

  move (direction) {
    if (direction === 'up') {
      this.y -= this.dy;
    } else {
      this.y += this.dy;
    }
  }

  render() {
    const side = this.side;
    let x;
    if (side === 'left') {
      x = 0;
    } else {
      x = this.game.canvas.width - this.width;
    }
    this.ctx.save();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, this.y, this.width, this.height);
    this.ctx.restore()
  }
}
