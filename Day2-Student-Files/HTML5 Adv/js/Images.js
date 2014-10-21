window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        //Create a variable that holds the image
        var srcImg = document.getElementById('img1');

        //Draw the image directly onto the canvas at the top left, normal size
        //ctx.drawImage(srcImg,0,0);

        //Draw and scale the image
        ctx.drawImage(srcImg,50,50,350,150);

        //Draw a portion SLICE of the source image
        //ctx.drawImage(srcImg,350,200,125,100,50,50,125,100);


//        Draw the video onto the canvas
//        Setup an interval function
//        Grab each image as the video plays and then PAINT it on the canvas
//        //Create a variable to hold the video
//        var srcVid = document.getElementById('vid1');
//
//        //Start the video
//        srcVid.play();
//
//        //Setup the interval
//        setInterval(function(){
//
//            ctx.drawImage(srcVid,0,0);
//
//        }, 16);

		}
	}
};