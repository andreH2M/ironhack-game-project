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
        this.paddle = new Human(this)
        this.computer = new Computer(this)
        this.ball = new Ball(this)
        this.scoreboard = new Scoreboard(this);
        this.bgm = document.getElementById("bgm");
        
        this.gameStatus  = "play"
    }

    reset () {
        this.computer = new Computer(this)
        this.ball = new Ball(this)
    }

    startGame() {
        this.gameStatus = "play"
        this.scoreboard.reset()
        this.reset ()
        this.loop()
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
            this.gameStatus = "endgame"
            this.drawFinalScreen ()
           //this.whoIsTheWinner()
        }
        
       else if(this.gameStatus === "play"){ 
        this.ball.update();
        this.paddle.update();
        //this.bgm.play()
        this.computer.runIntelligence();
        this.computer.update();
        this.render()};
        // Runs loop again
        //checking score
        //this.scoreboard.checkScores()
        window.requestAnimationFrame(() => {
            this.loop();
        });
    }

   /*  whoIsTheWinner() {
        
        
    } */
    
    drawFinalScreen () {
        const winner = this.scoreboard.whoIsTheWinner();
        this.ctx.fillStyle = "purple"
        this.ctx.fillRect(200,250,400,200)
        this.ctx.fillStyle = 'white';
        this.ctx.font = '32px Helvetica';
        this.ctx.fillText(`${winner} wins!`.toUpperCase(), 260, 360);
    } 
}
