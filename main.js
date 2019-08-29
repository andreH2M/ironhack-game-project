const canvas = document.querySelector('canvas');
const game = new Game(canvas);
let button = document.querySelector('button');

window.addEventListener('load', () => {
  button.addEventListener('click', function () {
    game.startGame();
  }); 
});



  ;
