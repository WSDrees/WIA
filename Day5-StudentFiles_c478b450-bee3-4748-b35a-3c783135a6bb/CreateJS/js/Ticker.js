window.onload = function() {
	var stage = new createjs.Stage("canvas1");

    //Create blue rectangle
    var rect1 = new createjs.Shape();

    rect1.graphics.beginFill('blue').drawRect(0,0,100,100);

    //Change the registration of the square
    //Change where the starting point of the square is
    rect1.regX=50;
    rect1.regY=50;

    //Move the square downwards, so we can see the whole square
    rect1.x=100;
    rect1.y=100;

    stage.addChild(rect1);

    //stage.update();

    //Ticker class - heartbeat of the animation - tick
    //Controls the timing of the animation

    //Create a listener and assign it to listen for that tick

    //Control how often the tick ticks
    //Set the frame rate of our animation

    //Default frame rate if you don't set it is 20 FPS

    createjs.Ticker.setFPS(30);             //FPS - Frames per second

    //Create an event listener to hear the tick
    createjs.Ticker.addEventListener('tick', ticks);             //Listen for a test string of tick

    //Create the function that will be called by the event listener
    function ticks(){
        //console.log('test');

        //Make any changes that we want to happen every frame inside of this function
        //Rotate this rectangle
        rect1.rotation +=8;

        //Any transform
        //fade out
        //rect1.alpha -=.01;

        //Move it across the screen
        //rect1.x+=10;
        //rect1.y +=5;

        //Skew
        //rect1.skewX +=20;

        //Scale
        //rect1.scaleX +=.1;
        //rect1.scaleY +=.1;





        stage.update();
    }
};