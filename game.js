// canvas size

class Game {
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.canvas.height = canvas.height;
        this.canvas.width =canvas.width;
        //let computer = GrowingComputerPaddle(canvas);
        //let player = HumanPlayerPaddle;

        this.callbacks = {
            up: () => {
                this.paddle.move('up');
            },
            down: () => {
                this.paddle.move('down');
            }
        }

        this.control = new Control(this.callbacks);
        // this.paddle = new Paddle(this)
        this.paddle = new Human(this)
        this.computer = new Computer(this)
        this.ball = new Ball(this)
    }

    startGame() {
        this.loop();

        // this.ball.render();
        // // bounce top and bottom
        // if (ball.hitTop() || ball.hitBottom()) {
        //     ball.bounceY ();
        // }
    
        // // reset game if out of bonds

        // if (ball.hitLeft() || ball.hitRight()) {
        //     if(ball.hitLeft()) {
        //         scoreboard.computerScores();
        //     }
        //     if (ball.hitRight()) {
        //         scoreboard.playerScores();
        //     }
        //     ball = Ball(game)
        //     player = HumanPlayerPaddle (canvas, ball)
        //     computer = GrowingComputerPaddle (canvas, ball)
        // }
        
        // // paddle boundaries

        // if (computer.hitTop()|| computer.hitBottom() ) {
        //     computer.bounceY();
        // }
    }
    
     //Colision 
     
     collidedWithBall () {
         if (player.collidedWithBall()) {  // right paddle
             this.ball.bounceX();
         }
         if (computer.collidedWithBall()) {  // left paddle
             ball.bounceX();
         }
     }

    whoIsTheWinner() {
        const winner = scoreboard.whoIsTheWinner;
        console.log(`${winner} wins!`);
    }
    
    renderBackground () {
        this.ctx.save();
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.ctx.restore();
    }

    render () {
        this.renderBackground();
        this.ball.render();
        this.paddle.render();
        this.computer.render();
        // this.scoreboard.render()
    }

    loop () {
        // Computes all of the game logic
        this.ball.update();
        // this.paddle.update();
        this.computer.update();
        // Renders all of the game state
        this.render();
        // Runs loop again
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }
}
