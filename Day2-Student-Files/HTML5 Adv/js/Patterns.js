window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {
//
//            //Create a pattern from an image
//
//            //First create a variable to hold our image
//            var patImg = new Image();       //Let's it know that an image is coming
//
//            //Wait for the image to load into memory
//            patImg.onload = function(){
//                //Once it is loaded set its fill style
//                ctx.fillStyle = ctx.createPattern(patImg, 'repeat-x'); //'repeat', 'repeat-x','repeat-y',no-repeat' Options
//
//                //Create our rectangle
//                ctx.fillRect(0,0,ctx.canvas.width, ctx.canvas.height);      //Get the width and height of the canvas
//
//            };
//
//            //Source the image
//            patImg.src = 'images/desert_desc_bug.gif';
//

            //Create a pattern on another canvas and use it on our main one


            //SETUP THE PATTERN CANVAS
                //Getting our element and getting our context

            var patCanvas = document.getElementById('patCan');
            var patCtx = patCanvas.getContext('2d');

            //Test if the patCtx exists
            if(patCtx){

                //Draw a line in our pattern canvas

                //Set your styles
                patCtx.strokeStyle = 'red';
                patCtx.lineWidth = 2;

                //Draw the line
                patCtx.beginPath();
                patCtx.moveTo(0,0);
                patCtx.lineTo(25,25);
                patCtx.stroke();

                //Use pattern canvas in our main canvas

                //Create our pattern stroke
                var strokePat = ctx.createPattern(patCanvas, 'repeat');

                //Set style to stroke pattern

                ctx.strokeStyle = strokePat;
                ctx.lineWidth = 25;

                //Stroke a rectangle
                ctx.strokeRect(50,50,200,200);


            }

        }
    }
};