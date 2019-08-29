class Scoreboard {
    constructor(game) {
        this.game = game;
        this.canvas = game.canvas
        this.ctx = game.ctx
        this.width = this.canvas.width;
        this.ball = this.game.ball
        this.goal = 5
        this.scores = {
            player: 0,
            computer: 0
        }
    }

    render(ctx) {
        const scores = this.scores;
        const displayedText = ` Player: ${scores.player}             Vs          Computer: ${scores.computer}`
        this.ctx.save();
        this.ctx.fillStyle = 'white';
        this.ctx.font = "30px Arial";
        this.ctx.fillText(displayedText, 150, 60);
        this.ctx.restore();
    }

    /* const playerScores () => {
        scores.player += 1;
    }

    const computerScores = () => {
        scores.computer += 1;
    } */

    checkScores() {
        if (this.ball.x <= 0) {
            this.scores.computer += 1;
        }
        if (this.ball.x >= this.width) {
            this.scores.player += 1;
        }

    }

    isThereAWinner() {
        console.log(this.scores.player === this.goal || this.scores.computer === this.goal)
        return this.scores.player === this.goal || this.scores.computer === this.goal;
    }
    

    whoIsTheWinner() {
        this.reset()
        return this.scores.player === this.goal ? "Player" : "Computer"
    }

    reset() {
        this.scores = {
            player: 0,
            computer: 0,
        }
    }
}
