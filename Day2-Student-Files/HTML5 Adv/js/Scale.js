window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Draw a rectangle
            ctx.fillStyle = 'blue';
            ctx.fillRect(0,0,100,50);

            //Set scale factor
            ctx.scale(2,2);

            ctx.fillStyle = 'red';
            ctx.fillRect(0,50,100,50);

            ctx.scale(.5,.5);

            ctx.fillStyle = 'green';
            ctx.fillRect(0,225,100,50);


        }
    }
};