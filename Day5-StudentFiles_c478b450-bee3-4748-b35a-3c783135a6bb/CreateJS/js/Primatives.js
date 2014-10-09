window.onload = function() {

    //Setup the stage
    var stage = new createjs.Stage('canvas1');

    //Create the shape
    var shape = new createjs.Shape();

    var shape2=new createjs.Shape();

    //Set up the stroke
    shape.graphics.beginStroke('purple');
    shape.graphics.setStrokeStyle(5,1,1); //Rounded caps and rounded joints

    //drawPolyStar(x,y,radius,size,pointSize,angle
    //Draw a five pointed star
    //USE .5 for point size
    shape.graphics.drawPolyStar(75,75,50,5,.5,-90);

    shape.graphics.drawCircle(75,75,50);

    //Draw a triangle - 3 side
    shape.graphics.drawPolyStar(550,75,50,3,0,-90);

    //Create a red filled triangle
    shape2.graphics.beginFill('red');
    shape2.graphics.drawPolyStar(250,250,50,3,0,-90);
    stage.addChild(shape2);

    //Add interactivity to our graphics
    //Add a listener directly to our shape
    shape2.addEventListener('click',function(event){

        console.log("The Red triangle is click");

    });

    //Add and update stage
    stage.addChild(shape);
    stage.update();

};