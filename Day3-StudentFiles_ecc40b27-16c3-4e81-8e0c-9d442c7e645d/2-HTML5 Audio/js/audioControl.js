//Create a variable to hold our audio
var audio;

window.onload=function(){
    //set variable equal to our audio
    audio= document.getElementById('audio');
};

//Create our clicked function
function clicked(){
    audio.currentTime += 1;
}

