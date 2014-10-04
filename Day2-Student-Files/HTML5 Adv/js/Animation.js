window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Setup variable for rotation of the picture
            var rotation = 0;

            //set a variable for the image
            var srcImg = document.getElementById('img1');

            //Find the center of our canvas and translate to it
            ctx.translate(ctx.canvas.width/2, theCanvas.height/2);

            setInterval(function(){

                //Clear the existing canvas
                ctx.clearRect(-800,-800,1600,1600);

                //Rotate our picture
                ctx.rotate(rotation*(Math.PI/180));

                //Draw image on our canvas
                ctx.drawImage(srcImg,-75,-75,150,150);

                //Change our rotation angle
                rotation+=8;

            }, 500);

            //Create a rectangle and make it grow

            //set variables for a width and height
            var width=10;
            var height=20;

            //Setup styles
            ctx.fillStyle = 'green';


            //Create our set interval function
            setInterval(function(){

                //Draw a rectangle
                ctx.fillRect(0,0,width,height);

                //Each time around change our dimensions
                width +=20;
                height +=20;

            }, 500);

        }
    }
};