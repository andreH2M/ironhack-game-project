const  Paddle = () => {
    x: 0, 
    y: 30,
    dy:10, 
    height: 100,
    width: 15,
    color: "white"
    update() {
        this.y+= this.dy
    }

    bounceY() {
        this.dy = -1 * this.dy;
    }

    render (ctx) {
     ctx.save();
     ctx.fillStyle=this.color;
     ctx.fillRect (this.x, this.y, this.width, this.height);
     ctx.restore()
    }
}

let paddle = Paddle();

// End of the padle