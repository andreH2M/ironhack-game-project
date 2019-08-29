// canvas size

class Game {
    constructor(canvas){
        this.canvas = canvas
        this.ctx = canvas.getContext("2d")
        this.canvas.height = canvas.height;
        this.canvas.width =canvas.width;
        this.callbacks = {
            up: (active) => {
                this.paddle.move('up', active);
            },
            down: (active) => {
                this.paddle.move('down', active);
            }
        }

        this.control = new Control(this.callbacks);
        // this.paddle = new Paddle(this)
        this.paddle = new Human(this)
        this.computer = new Computer(this)
        this.ball = new Ball(this)
        this.scoreboard = new Scoreboard(this);
        this.bgm = document.getElementById("bgm");
    }

    reset () {
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
    

    
    
    renderBackground () {
        this.bgImage = new Image()
        this.bgImage.src = "/IMG/—Pngtree—space background_3591568.png"
        this.ctx.save();
        this.ctx.drawImage (this.bgImage, 0, 0, canvas.width, canvas.height )
        this.ctx.restore();
    }

    render () {
        this.renderBackground();
        this.ball.render();
        this.paddle.render();
        this.computer.render();
        this.scoreboard.render()

    }

    loop () {
        if (this.scoreboard.isThereAWinner()){
           this.whoIsTheWinner()
        }
        
        this.ball.update();
        this.paddle.update();
        //this.bgm.play()
        this.computer.runIntelligence();
        this.computer.update();
        //this.audio();   try to install audio
        this.render();
        // Runs loop again
        //checking score
        //this.scoreboard.checkScores()
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }

    whoIsTheWinner() {
        const winner = this.scoreboard.whoIsTheWinner();
        console.log(`${winner} wins!`);
    }
}
