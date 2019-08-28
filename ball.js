// Option with classes

class Ball {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas
    this.ctx = game.ctx
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.dx = -5;
    this.dy = 6;
    this.radius = 10;
    this.color = "white";
  }

  update() {
    const newX = this.x + this.dx;
    const newY = this.y + this.dy;
    
    // Find if ball is touching person's paddle
    let isTouchingPersonPaddle = false;
    const personPaddle = this.game.paddle;

    const withInX = this.x <= personPaddle.width;
    const withinY = this.y >= personPaddle.y && this.y <= personPaddle.y + personPaddle.height;
    
    isTouchingPersonPaddle = withInX && withinY;

    // Find if ball is hitting computed paddle
    let isTouchingComputerPaddle = false;
    // const personPaddle = this.game.paddle;

    // const withInX = this.x <= personPaddle.width;
    // const withinY = this.y >= personPaddle.y && this.y <= personPaddle.y + personPaddle.height;
    
    // isTouchingPersonPaddle = withInX && withinY;


    if (newX < 0) {
      // We lost
    } else if (newX > this.canvas.width) {
      // Computer lost
    } else if (isTouchingPersonPaddle) {
      this.bounceX();
    } else if (false) {
      this.bounceX();
    }

    if (newY < 0) {
      this.bounceY();
    } else if (newY > this.canvas.height) {
      this.bounceY();
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  // invert direction on Top/Bottom
  bounceY() {
    this.dy = -1 * this.dy;
  }

  // invert direction on right/left after colision
  bounceX() {
    this.dx = -1 * this.dx;
    // this.dx *= -1;
  }

  // hitTop() {
  //   this.y < this.radius;
  // }

  // hitBottom() {
  //   this.y > this.canvas.height - this.radius;
  // }

  // hitLeft() {
  //   this.x < this.radius;
  // }

  // hitRight() {
  //   this.x > canvas.height - this.radius;
  // }

  render() {

    this.ctx.save();
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
    this.ctx.restore();

  }
}