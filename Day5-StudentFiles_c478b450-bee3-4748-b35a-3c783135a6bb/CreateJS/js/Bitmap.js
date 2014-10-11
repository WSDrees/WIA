window.onload = function() {

	var canvas = document.getElementById('canvas');
    var stage = new createjs.Stage('canvas');

    //Create a bitmap to hold the raster image
    var bmp = new createjs.Bitmap();

    //Create variable for the image
    var img = new Image();

    //Set source of the image
    img.src = 'images/ship.svg';

    //Wait for the image to load
    //If the image doesn't load before the image is loaded the animation won't make sense
    img.onload = updateStage;

    //Find the center of the stage
    //Create the variable for the canvas
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;

    //Create the function updateStage
    function updateStage(e){

        //Create a bitmap - which is the class to hold raster images
        //Create this outside of this function - line 6

        //Let's fill our bmp variable with the image, now that it is loaded
        bmp = new createjs.Bitmap(e.target);

        //Set x and y to the center of the canvas
        bmp.x = centerX;
        bmp.y = centerY;

        //Set our registration points - use the middle of the image
        bmp.regX = 50;
        bmp.regY = 50;

        //Scale it up
        //bmp.scaleX = 4;
        //bmp.scaleY = 4;

        //Add this to the stage
        stage.addChild(bmp);

        //Update the stage
        stage.update();

    }

    //Add a listener for the tick
    createjs.Ticker.addEventListener('tick', tick);

    //Create the function tick
    function tick(){

        //Make or change the stage
        //bmp.rotation += 2;

        //bmp.x +=2;

        //Use Math to move the ship
        //Sake the ship
        //bmp.x = centerX + (Math.random() -.5) *50;
        //bmp.y = centerY + (Math.random() -.5) *50;

        //Wave motion
        //7 is how fast it moves and the number 50 is how far it goes away from the center point
        bmp.x = centerX + Math.sin(createjs.Ticker.getTicks()/7)*150;

        bmp.y = centerY + Math.cos(createjs.Ticker.getTicks()/7)*50;



        //Update the stage each and every time
        stage.update();
    }
    
			
};