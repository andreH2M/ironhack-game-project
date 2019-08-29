class Paddle {
  constructor(game, side) {
    this.game = game;
    this.side = side;
    this.ctx = game.ctx
    this.x = 0;
    this.y = 250;
    this.dy = 7;
    this.height = 150;
    this.width = 14;
    this.color = "#df00fc"
    this.pressing = {
      up: false,
      down: false
    }
  }

  update () {
    
    if (this.pressing.up && this.y >= 0) {
      this.y -= this.dy;
    } else if (this.pressing.down && this.y < this.game.canvas.height - this.height) {
      this.y += this.dy;
    }
  }

  move (direction, active) {
    this.pressing[direction] = active;
  }


  render() {
    const side = this.side;
    let x;
    if (side === 'left') {
      x = 1;
    } else {
      x = this.game.canvas.width - this.width -1
    }
    this.ctx.save();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, this.y, this.width, this.height);
    this.ctx.restore()
  }
}
