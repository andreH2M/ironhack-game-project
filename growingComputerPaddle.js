const GrowingComputerPaddle(canvas) => {

    const paddle = SimpleComputerPaddle(canvas);
    const changes = {
        lastChange: Date.now(),
        growTime: 3, // seconds before next growth
        dHeight: 30,
        heightLimit: 500,
        update() {
            this.move ();
            const deltaTime = Math.abs((this.lastChange-Date.now()) / 1000);
            if (deltaTime > this.growTime && this.height < this.heightLimit) {
                this.height+= this.height;
                this.lastChange = Date.now();
            }
        }

        move: paddle.update, 
    }

    return Object.assign (
        paddle, 
        changes
    );

    
}