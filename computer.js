class Computer extends Paddle {
  constructor (game) {
    super(game, 'right');
    this.dy = 1.5;
  }

  runIntelligence () {
    // Choose if computer should move or not    
    // Choose direction in which computer should move
    this.move('up', false);
    this.move('down', false);
    const deltaY = this.game.ball.y - this.y - this.height / 2;
    if (deltaY < 0) {
      this.move('up', true);
    } else {
      this.move('down', true);
    }
    // with this command computer paddle will follow the ball in Y way
    //let direction = 'bottom';
    //this.move(direction);
  }
}
