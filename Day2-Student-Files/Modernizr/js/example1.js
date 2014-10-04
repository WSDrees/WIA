//Test if our html5 canvas works on this browser

//If statement
if(Modernizr.canvas){
    //Canvas does work and we can draw on it

    //Setup our canvas and context
    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");

    //Test to verify our context
    if(ctx){

        //Draw a string of text
        //Setup font info
        ctx.font = '25pt Georgia';

        ctx.fillText('Canvas is working!',20,60);

    }

}else{

    //Fallback content would go here

}

//Look at the whole Modernizr Object
console.log(Modernizr);