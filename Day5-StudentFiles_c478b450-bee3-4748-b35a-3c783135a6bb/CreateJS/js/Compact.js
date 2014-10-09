window.onload = function() {

	var stage = new createjs.Stage("canvas1");


	var shape = new createjs.Shape();

	//  Star our normal commands

	shape.graphics.beginStroke("blue");
	shape.graphics.setStrokeStyle(10,"round","round");

	// Draw a triangle - using moce to and line to
	shape.graphics.moveTo(50,50);
	shape.graphics.lineTo(250,250);
	shape.graphics.lineTo(50,250);
	shape.graphics.closePath();

	//Compact our code
	shape.graphics.beginStroke("red").setStrokeStyle(10,"round","round").moveTo(50,50),lineTo(250,250).lineTo(50,250).closePath();


	// Use short cuts
	shape.graphics.s("red").ss(10,"1","1").mt(50,50),lt(250,250).lt(50,250).cp();


	

	

}