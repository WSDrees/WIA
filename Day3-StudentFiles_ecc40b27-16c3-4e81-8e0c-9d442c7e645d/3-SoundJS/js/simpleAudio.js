window.onload=function(){

    //initializeDefaultPlugins
    if(!createjs.Sound.initializeDefaultPlugins()){

        //Stop all of our coe, because soundjs is broken
        return;

    }

    //Register our sounds with Soundjs
    //Setup process
    createjs.Sound.registerSound({

        id:'soundID',
        src: 'audio/music.mp3|audio/music.ogg'

    });

    //Listen for the fileload or loadcomplete
    createjs.Sound.addEventListener('fileload,handFileLoad');

    //Create that function to handle the file once loaded

    function handFileLoad(event){
        console.log("PreLoaded: ", event.src);

        //Play the file
        createjs.Sound.play(event.src);
    }


};

function playMusic(){
    console.log("Audio button has been clicked");

    //Play the audio based on the id that we created
    createjs.Sound.play("soundID");
}