window.onload = function() {

    var stage = new createjs.Stage('canvas1');

    //Create a new shape
    var shape = new createjs.Shape();

    //Set stroke style
    shape.graphics.beginStroke('purple');
    shape.graphics.setStrokeStyle(10,0,0);

    //Draw a normal rectangle
    shape.graphics.rect(50,50,300,300);

    //Rounded Rectangle
    shape.graphics.beginStroke('blue');
    shape.graphics.drawRoundRect(75,75,250,250,30);

    //Complex rounded rectangle
    shape.graphics.beginStroke('red');
    shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,50,0);

    //Add to the stage
    stage.addChild(shape);

    //Update our stage
    stage.update();

};