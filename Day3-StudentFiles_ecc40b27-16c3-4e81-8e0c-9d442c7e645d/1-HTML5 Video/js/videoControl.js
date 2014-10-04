//Create a variable to hold our video
var vid;

window.onload = function(){

    //Set our vid variable
    vid=document.getElementById('vid');

};

//Create a clicked function that will skipp 2 seconds ahead in our video
function clicked(){

    //currentTime - current play time in seconds
    vid.currentTime += 2;

}


//Create a function - that when you click on the video we will pause or play the video
function pauseToggle(){

    //Test if the video is currently playing or paused
    //Access the paused property - boolean
    if(vid.pause){
        //If paused, then play the video
        vid.play();
    }else{
        //Video is currently playing so let's pause it
        vid.pause();
    }

}