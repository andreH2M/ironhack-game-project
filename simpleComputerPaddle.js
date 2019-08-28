const SimpleComputerPaddle = (canvas) {
    const paddle = Paddle();
    const changes = {
        x: canvas.width - paddle.width -20,
        bounceY () {
            this.dy= -1*this.dy
        }
        update () {
            this.y += this.dy;
        }
    }
    return Object.assign (
        paddle, 
        changes
    );
}

collidedWithBall () {
    const withInX = ball.x <= this.x - ball.radius;
    const withinY = ball.y >= this.y && ball.y <= this.y + this.height;
    return withinX && withinY 
  }