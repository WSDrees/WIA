window.onload = function() {

    //Setup stage
    var stage = new createjs.Stage('canvas1');

    //Create a shape
    var shape = new createjs.Shape();

    //Define and setup the stroke
    shape.graphics.beginStroke('purple');

    //Linear gradient stroke
    shape.graphics.beginLinearGradientStroke(['green','red'],[0,1],50,50,250,250);

    //Radial Gradient stroke
    shape.graphics.beginRadialGradientStroke(['black','yellow'],[0,1],50,250,0,50,250,250);

    //Set our stroke styles
    shape.graphics.setStrokeStyle(10);  //Thickness,caps,joints,miter
    shape.graphics.setStrokeStyle(10,'round','round');

    //For shortcut we can use number instead of text strings
    //Caps - 0=butt, 1=round, 2=square
    shape.graphics.setStrokeStyle(10,1,'round');

    //Joints- 0=miter, 1=round, 2=bevel
    shape.graphics.setStrokeStyle(10,1,0);

    //Draw a line segment
    //Move to our starting position moveTo()
    shape.graphics.moveTo(50,50);

    //Draw a quadratic curve
    //shape.graphics.quadraticCurveTo(25,150,225,225);

    //Draw an arc
    //shape.graphics.arcTo(100,50,100,500,60);

    //Draw a bezier curve
    shape.graphics.bezierCurveTo(100,50,100,200,250,250);

    //Draw a line
    shape.graphics.lineTo(50,250);

    //Closed path
    shape.graphics.closePath();

    //Draw a straight line
    //shape.graphics.lineTo(250,25);

    //Add our shape to our stage
    stage.addChild(shape);

    //Update the stage
    stage.update();

};