window.onload = function() {
	
	
		var stage = new createjs.Stage();

		var shape = new createjs.Shape();


		shape.graphics.beginFill("red");

		shape.graphics.drawRect(50,50,100,100);

		//Rotate our square
		//shape.rotation = 30;

		//Move registration point of our square
		shape.regX = 100;	// origin point + width/2
		shape.regY = 100;   // origin + height/2


		shape.rotation = 30;


		// Move the x y so we can see it
		shape.x = 200;
		shape.y = 100;

		// Scaling 
		// .5 = 1/2    2 = 200%

		shape.scaleX = .5;
		shape.scaleY = 2;

		//Aphla
		shape.alpha = .5;


		//Visible
		// 0 or 1
		// 0 - not visable in is vever drawn on the canvas
		// Never drawn - NOT clickable
		shape.visible = 1;

		//skewing

		stage.addChild(shape);
		stage.update();
	
};