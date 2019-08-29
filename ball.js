// Option with classes

class Ball {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas
    this.ctx = game.ctx
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;
    this.dx =  -5;
    this.dy =  7;
    this.radius = 9;
    this.color = "#df00fc";
    //this.sound = new Sound("./Sounds/Sound Touch.mp3")
    this.hitPaddle = document.getElementById("hitPaddle");
  }

  update() {
    const newX = this.x + this.dx;
    const newY = this.y + this.dy;
    
    // Find if ball is touching person's paddle
    let isTouchingPersonPaddle = false;
    const personPaddle = this.game.paddle;

    const withInX = this.x < personPaddle.width;
    const withinY = this.y > personPaddle.y && this.y <= personPaddle.y + personPaddle.height;
    
    isTouchingPersonPaddle = withInX && withinY;


    // Find if ball is hitting computer paddle
    
    let isTouchingComputerPaddle = false;
    const computerPaddle = this.game.computer;
  
    const withInXcomputer = this.x > this.canvas.width - computerPaddle.width; 
    const withInYcomputer = this.y >= computerPaddle.y && this.y <= computerPaddle.y + computerPaddle.height;
    
    isTouchingComputerPaddle = withInXcomputer && withInYcomputer;
    //console.log(isTouchingComputerPaddle)


    if (newX < 0) {
      // We lost
      this.game.scoreboard.scores.computer += 1;
      this.game.reset();
    } else if (newX > this.canvas.width ) {
      // Computer lost
      this.game.scoreboard.scores.player += 1;
      this.game.reset();
    } else if (isTouchingPersonPaddle) {
      this.bounceX();
    } else if (isTouchingComputerPaddle) {
      this.bounceX();
    } else if (false) {
      this.bounceX();
    }

    if (newY <= this.radius / 2) {
      this.bounceY();
      // this.hitPaddle.play()
      //this.sound.play()      

    } else if (newY > this.canvas.height - this.radius / 2) {
      this.bounceY();
      // this.hitPaddle.play()
     //this.sound.play()
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