window.onload = function() {

    //Setup the stage
    var stage = new createjs.Stage('canvas1');

    //Create the shape
    var shape = new createjs.Shape();

    //Setup the stroke
    shape.graphics.beginStroke('purple');
    shape.graphics.setStrokeStyle(10,0,1);

    //Draw a basic circle
    shape.graphics.drawCircle(100,100,50);

    //Draw an ellipse
    shape.graphics.drawEllipse(75,200,150,50);

    //Draw an arc
    //Angles are still in radians just like canvas
    shape.graphics.beginStroke('red');
    shape.graphics.arc(100,100,75,0,-90*(Math.PI/180),1);
    //1 = make it anticlockwise!



    //Add to stage and update
    stage.addChild(shape);
    stage.update();

};