var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

if(ctx){

    //Create a variable to keep track of what frame we are on

    //Create x & y variables - position inside of the sprite sheet for each frame
    var x;
    var y;

    //Load our sprite sheet
    var img = new Image();
    img.src = 'images/doggy.png';

    //Wait for the image to load
    img.onload = draw;

    //Create the draw function
    function draw(){

        //Call to a request animation frame
        

    }



}