window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
						
			//variable of a text string
        var theString="Drawing Test on a canvas";

        //Drawing text on canvas
        ctx.fillText(theString,20,20);

        //Change the font style
        ctx.font='25pt Georgia';
        ctx.fillText(theString,25,25);
						
						
						
		}
	}
};