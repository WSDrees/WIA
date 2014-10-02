window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
						
			//setup styles
        ctx.strokeStyle="blue";
        ctx.lineWidth=5;

        //simple bezier curve
        ctx.beginPath();
        ctx.moveTo(50,200);
        ctx.bezierCurveTo(50,100,200,100,200,50);
        ctx.stroke();
						
						
						
		}
	}
};