window.onload = function() {

    //First, create our stage for everything else to be on
    //The stage is the main container for ALL other display objects

    //Get a reference to our canvas
    var canvas=document.getElementById('canvas1');

    //Create our stage variable
    //You have to put createjs ~ it is a namespace, which helps avoid cross confusion from different libraries that use the same variables
    var stage = new createjs.Stage(canvas);

    //Create a blue circle on the stage

    //Start with a new graphic
    var circleGraphic = new createjs.Graphics();

    //Draw a circle with a radius of 50, centered at (0,0), relative to our shapes position and registration point
    //Fill the circle with a blue color
    circleGraphic.beginFill('blue');
    circleGraphic.drawCircle(0,0,50);

    //Create a shape instance
    //Shape is a displayObject class that draws the actual vector on our stage
    //Class contains all of the methods used to define our vector shapes

    var circleShape = new createjs.Shape(circleGraphic);     //Make the shape based upon our

    //Adjust our displayObject properties
    //Positioning, Transforming the object on the stage
    circleShape.x=50;
    circleShape.y=50;
    circleShape.alpha=.5;

    //Add the shape to the stage's display list
    //Using addChild()
    stage.addChild(circleShape);

    //The stage is not drawn on to the canvas until we tell the stage to update itself
    stage.update();

			
};