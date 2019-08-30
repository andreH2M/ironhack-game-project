class Scoreboard {
    constructor(game) {
        this.game = game;
        this.canvas = game.canvas
        this.ctx = game.ctx
        this.width = this.canvas.width;
        this.ball = this.game.ball
        this.goal = 2
        this.winnerSound = document.getElementById("winner");
        this.reset();
    }

    render(ctx) {
        const scores = this.scores;
        const displayedText = ` Player: ${scores.player}  ----  SCOREBOARD  ----  Computer: ${scores.computer}`
        this.ctx.save();
        this.ctx.fillStyle = "#d12cd1";
        this.ctx.font = "30px Arial";
        this.ctx.fillText(displayedText, 70, 60);
        this.ctx.restore();
    }

   
    checkScores() {
        if (this.ball.x <= 0) {
            this.scores.computer += 1;
        }
        if (this.ball.x >= this.width) {
            this.scores.player += 1;
        }

    }

    isThereAWinner() {
        // console.log(this.scores.player === this.goal || this.scores.computer === this.goal)
        if(this.scores.player === this.goal || this.scores.computer === this.goal) {
            this.winner = this.scores.player === this.goal ? "Player" : "Computer";
            this.winnerSound.play();
        }
        return !!this.winner;
    }

    reset() {
        this.winner = 0;
        this.scores = {
            player: 0,
            computer: 0,
        }
    }
}
