var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

if(ctx){

    //Create a variable to keep track of what frame we are on
    var count = 0;

    //Create x & y variables - position inside of the sprite sheet for each frame
    var x;
    var y;

    //Create variables for the x and y positions to MOVE the animation
    var xPos = 0;
    var yPos = 0;

    //Load our sprite sheet
    var img = new Image();
    img.src = 'images/doggy.png';

    //Wait for the image to load
    img.onload = draw;

    //Create the draw function
    function draw(){

        //Call to a request animation frame
        //Pass it a function that causes a infinite loop - As long as we have a frame, continue to loop in this function called draw - as long as its in view
        requestAnimationFrame(draw);

        //Clear the canvas to avoid image stacking
        ctx.clearRect(0,0,canvas.width,canvas.height);

        //Setup our count and x and y variables to track what frame should show
        //There are 9 rows and 17 columns - 150 images

        //Give us the row we are in
        //Each frame is 212px wide by 201px height
        x=(count%9)*212;
        y=Math.floor(count/9)*201;

        //Draw each frame on to the canvas
        ctx.drawImage(img,x,y,212,201,xPos++,yPos++,212,201);

        //Increase each of the different counts
        //Increase the frame count by 1 each time
        //We CANT go over 150 frames

        if(count==149){

            //Restart the animation
            count=0;

        }else {

            //Add one to our frame count
            count++;
        }




    }



}