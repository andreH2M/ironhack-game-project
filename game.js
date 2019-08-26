const canvas = document.queryselector("canvas")
const ctx = canvas.getContext ("2d");

// canvas size

canvas.height = height;
canvas.width = width;









// Main


// clone ball
let oldBall = Object.assign ({}, ball)

const main = () => {
    requestAnimationFrame(main)
    ctx.save();
    ctx.fillStyle = "blue"
    ctx.fillRect (0, 0, canvas.width, canvas.height);
    ctx.restore();


// reset game if out of bounds
    if (ball.y < ball.radius || ball.y> canvas.height - ball.radius) {
    ball.bounceY ();
}

// reset game if out of bonds

if  (ball.x < ball.radius || ball.x> canvas.height - ball.radius) {
    Object.assign (ball, oldBall);
}

    // paddle boundaries

    if  (paddle.y <= 0 || paddle.y >= canvas.height - paddle.height) {
    paddle.bounceY();
    }



ball.update();
paddle.update()
ball.render(ctx);
paddle.render(ctx);

}

requestAnimationFrame(main)