window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Draw an image

            //Get our image into a variable
            var srcImg = document.getElementById('img1');


            //Create a circle clipping path
            ctx.beginPath();
            ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, 150, 0, 2*Math.PI);
            ctx.clip();

            ctx.drawImage(srcImg,0,0);




        }
    }
};