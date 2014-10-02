window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Setup styles
            ctx.fillStyle = "blue";

            //Draw rectangle
            ctx.fillRect(0,0,100,50);

            //Translate the origin to the middle of the canvas
            ctx.translate(ctx.canvas.width/2, ctx.canvas.height/2);

            //Draw the same rectangle
            ctx.fillRect(-50,-25,100,50);

            //How do I undo this???
            //ctx.translate(0,0); DOES NOT WORK!!!
            ctx.translate(-ctx.canvas.width/2, -ctx.canvas.height/2);

            ctx.fillStyle='red';
            ctx.fillRect(0,0,50,50);

        }
    }
};