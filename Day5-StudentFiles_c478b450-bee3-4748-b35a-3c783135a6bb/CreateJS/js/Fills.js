window.onload = function() {

    //Create the stage
    var stage = new createjs.Stage('canvas1');

    //Draw a rectangle
    //Create a new shape
    var rect1 = new createjs.Shape();

    //Setup the fill
    rect1.graphics.beginFill('purple');

    //Name, hex code, rgb, rgba, hsl, hsla ANY CODE OR COLOR
    rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255));
    rect1.graphics.beginFill('rgb(60,60,60)');

    rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255,.5));

    rect1.graphics.beginFill(createjs.Graphics.getHSL(120,100,50,.5));

    //Linear Gradients (Diagonal Gradient)
    rect1.graphics.beginLinearGradientFill(['yellow','red'],[0,1],50,50,150,150);
    //Horizontal
    rect1.graphics.beginLinearGradientFill(['yellow','red'],[0,1],50,50,150,50);
    //Vertical
    rect1.graphics.beginLinearGradientFill(['yellow','red'],[0,1],50,50,50,150);

    //Add another color
    rect1.graphics.beginLinearGradientFill(['yellow','purple','red'],[0,.5,1],50,50,50,150);


    //Radial Gradients
    rect1.graphics.beginRadialGradientFill(['yellow','red'],[0,1],100,100,0,100,100,40);

    rect1.graphics.beginRadialGradientFill(['yellow','purple','red'],[0,.5,1],100,100,0,100,100,50);


    //Draw the rectangle
    rect1.graphics.rect(50,50,100,100);

    //Add to stage
    stage.addChild(rect1);

    //Update the stage
    stage.update();

};