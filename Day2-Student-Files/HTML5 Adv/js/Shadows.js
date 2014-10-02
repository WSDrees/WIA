window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Save the original or "Now Shadow" context
//            ctx.save();

            //save the shadow as a variable
            var originalShadowColor = ctx.shadowColor;

            //Setup a basic shadow
            ctx.shadowColor = '#000000';
            ctx.shadowOffsetX = 20;
            ctx.shadowOffsetY = 20;
            ctx.shadowBlur = 15;

            //draw a simple rectangle
            //Set your styles *MUST DO THIS FIRST***
            ctx.fillStyle = 'rgba(0,0,255,1)';
            ctx.fillRect(20,20,200,100);

            //Change the shadow settings for the text
            ctx.shadowColor = 'rgba(0,100,100,.5)';
            ctx.shadowOffsetX = 5;
            ctx.shadowOffsetY = 5;
            ctx.shadowBlur = 5;

            //Create text on our page
            var theString = 'Drawing Text on a canvas!';

            //Style our text
            ctx.font = '25pt Georgia';

            //Draw our text
            ctx.fillText(theString, 250,75);

            //Draw another WITHOUT a rectangle
//            ctx.restore();
            ctx.shadowColor = originalShadowColor;

            ctx.fillStyle = 'green';
            ctx.fillRect(20,225,200,50);


        }
    }
};