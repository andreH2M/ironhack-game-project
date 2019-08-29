const canvas = document.querySelector('canvas');
const game = new Game(canvas);


window.addEventListener('load', () => {
  game.startGame();
});


/* //const $button = document.querySelector('button');

$button.addEventListener('click', function () {
  game.startGame();
}); */
