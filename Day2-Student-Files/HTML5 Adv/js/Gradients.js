window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            //Create a linear gradient
            var linGrd = ctx.createLinearGradient(20,20,20,300);    //Draw a line from here to here

            //Add color Stops CREATE THE GRADIENT
            linGrd.addColorStop(0,'#f00');      //Start with red
            linGrd.addColorStop(.5,'#00f');     //Blue at the halfway point
            linGrd.addColorStop(1,'#0f0');      //Green at the end

            //Create a rectangle and fill with gradient
            ctx.fillStyle = linGrd;
            ctx.fillRect(20,20,200,280);


            //Create a radial gradient
            var radGrd = ctx.createRadialGradient(525,150,20,525,150,100);

            //Add color Stops
            radGrd.addColorStop(0,'#f00');
            radGrd.addColorStop(.5,'#00f');
            radGrd.addColorStop(1,'#0f0');

            //Create an arc
            ctx.fillStyle = radGrd;

            ctx.beginPath();
            ctx.arc(525,150,100,0,2*Math.PI);

            ctx.fill();



        }
    }
};