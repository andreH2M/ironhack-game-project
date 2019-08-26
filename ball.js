// Ball

let ball = {

    x:canvas.width / 2,
    y:canvas.height / 2,
    dx: 10,
    dy:5,
    radius:20, 
    color: "blue"
    update(){
        this.x += this.dx;
        this.y += this.dy;
    },

    // invert direction on Top
    bounceY(){
        this.dy = -1* this.dy;
    }
    
    render(ctx){

        ctx.save ();
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this. radius, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();

    }
}

ball.render(ctx)

//End of ball