// Human Player Paddle

const KEYS = {
    UP = 38,
    DOWN = 40
}

const HumanPlayerPaddle = () => {
    return Object.assign(Paddle(), ) {
        
        dy: 50  //increase the vecolity of the human paddle
        update(e){
            const {keyCode} = e;
            switch (keyCode) {
                case KEYS.DOWN:
                    this.y += this.dy;
                    break;
                case KEYS.UP:
                    this.y -= this.dy;
                    break;
                    default:
                    break;
            }
        }
    }
}

let player = HumanPlayerPaddle();
windows.addEventListener( "keydown", (e) 0> player.update(e));