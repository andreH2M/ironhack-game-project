class Computer extends Paddle {
  constructor (game) {
    super(game, 'right');
  }

  update () {
    const ball = this.game.ball;
    // Choose if computer should move or not
    let computerShouldMove = false;
    if (computerShouldMove) {
      // Choose direction in which computer should move
      let direction = 'bottom';
      this.move(direction);
    }
  }
}
