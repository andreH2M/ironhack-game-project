

/* class Scoreboard {
    constructor (game) {
 */

      const Scoreboard = (game) => {
        
      let scores = {
          player:0,
          computer:0
      }

      const render = (ctx) => {
          const displayedText = `
          player: ${scores.player}
          computer: ${scores.computer}
          `
    

      ctx.save();
      ctx.font = "40px Arial";
      ctx.fillText(displayedText, 30, 40);
      ctx.restore();
    }

     const playerScores = () => {
         scores.player += 1;
     }

     const computerScores = () => {
         scores.computer +=1;
     }

     const isThereAWinner = () => {
         return scores.player === goal || scores.computer ===goal;
     }

     const whoIsTheWinner = () => {
         if (!isThereAWinner()) return "No one yet";
         return scores.player === goal ? "Player" : "Computer"
     }

     const reset = () => {
         scores = {
             player: 0,
             computer:0, 
         }

         return {
             playerScores: playerScores,
             computerScores: computerScores,
             reset: reset,
             isThereAWinner:isThereAWinner,
             whoIsTheWinner:whoIsTheWinner,
             render: render
         }
     }


    }

