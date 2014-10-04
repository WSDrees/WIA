window.onload=function(){

    //Test to make sure that soundjs loaded okay
    if(!createjs.Sound.initializeDefaultPlugins()){
        return;
    }

    //Pros setup a path name to their audio folder
    var audioPath = 'audio/';

    //Loading multiple files - Manifest
    var manifest = [

        {id:'Music', src:audioPath+'music.mp3|'+audioPath+'music.ogg'},
        {id:'Thunder', src:audioPath+'Thunder1.mp3|'+audioPath+'Thunder1.ogg'}

    ];

    //Listen for these files to be loaded
    //Instead of fileload it can be filecomplete
    createjs.Sound.addEventListener('fileload',handleLoad);

    //After loaded now register the whole manifest with soundjs
    createjs.Sound.registerManifest(manifest);

};


//Create our handleLoad function
function handleLoad(event){

    //createjs.Sound.play(event.src);



}

function playMusic(){
    createjs.Sound.play('Music');
}

function playThunder() {
    createjs.Sound.play('Thunder');
}