window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {
				
ctx.fillStyle="rgb(67,113,255)";
ctx.strokeStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.fillRect(23,20,238,145);
ctx.strokeRect(23,20,238,145);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(56,255,0)";
ctx.lineStyle="rgb(0,0,0)";
ctx.lineWidth=1;
ctx.beginPath();
ctx.moveTo(196,12);
ctx.bezierCurveTo(196,12,63,18,105,112);
ctx.bezierCurveTo(148,205,97,258,208,199);
ctx.bezierCurveTo(319,139,302,108,272,85);
ctx.bezierCurveTo(242,61,301,52,247,32);
ctx.bezierCurveTo(193,12,193,12,193,12);
ctx.fill();
ctx.stroke();

ctx.fillStyle="rgb(255,255,0)";
ctx.beginPath();
ctx.moveTo(232,77);
ctx.bezierCurveTo(232,78,232,79,232,80);
ctx.bezierCurveTo(232,112,208,150,163,150);
ctx.bezierCurveTo(149,150,136,146,125,139);
ctx.bezierCurveTo(127,139,129,139,131,139);
ctx.bezierCurveTo(143,139,153,135,162,128);
ctx.bezierCurveTo(151,128,142,121,139,112);
ctx.bezierCurveTo(140,112,142,112,143,112);
ctx.bezierCurveTo(146,112,148,112,150,111);
ctx.bezierCurveTo(139,109,130,99,130,87);
ctx.lineTo(130,87);
ctx.bezierCurveTo(133,89,137,90,141,90);
ctx.bezierCurveTo(135,86,130,78,130,70);
ctx.bezierCurveTo(130,65,132,61,134,58);
ctx.bezierCurveTo(146,72,164,82,184,83);
ctx.bezierCurveTo(184,81,183,79,183,77);
ctx.bezierCurveTo(183,64,194,53,208,53);
ctx.bezierCurveTo(215,53,221,56,225,61);
ctx.bezierCurveTo(231,60,236,58,241,55);
ctx.bezierCurveTo(239,61,235,65,230,68);
ctx.bezierCurveTo(235,68,240,66,244,65);
ctx.bezierCurveTo(241,69,237,74,232,77);
ctx.fill();












						
		}
	}
}