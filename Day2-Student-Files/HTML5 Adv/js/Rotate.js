window.onload = function() {
    var theCanvas = document.getElementById('Canvas1');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {


            //Save the context
            ctx.save();

            ctx.fillStyle = 'blue';
            ctx.fillRect(150,30,100,50);

            //Rotate around the origin
            ctx.rotate((Math.PI/180)*45);       //Math to convert to degrees from radians

            //Draw a 2nd rectangle
            ctx.fillStyle = 'red';
            ctx.fillRect(150,30,100,50);

            ctx.restore();

            //Translate the origin
            ctx.translate(200,55);

            ctx.rotate((Math.PI/180)*45);

            //Draw a third rectangle
            ctx.fillStyle = 'green';
            ctx.fillRect(-75,-15,100,50);







        }
    }
};