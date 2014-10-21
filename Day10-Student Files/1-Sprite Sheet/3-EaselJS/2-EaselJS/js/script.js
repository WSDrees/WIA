var ship;

function init() {

    var canvas = document.getElementById('easel');
    var stage = new createjs.Stage(canvas);

    //Setup the center of the canvas
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;

    //Setup our sprite sheet
    var ss = new createjs.SpriteSheet({

        //Animations - holds all of the sprite sheet data itself
        //Allows us to name sections of animation
        animations:{
            //Sor of written like JSON data
            fly:[0,6],
            explode:[7,11,'fly']
        },
        //Images - takes the location of the sprite sheet
        images:['images/Ship-Blink.png'],

        //Frames - parameters of the animation and breaks image up
        frames:{
            height:80,
            width: 110,
            regX: 55,
            regY: 40
        }
    });

    //After we setup the sprite sheet, then we have to call it
    //BitmapAnimation
    ship=new createjs.BitmapAnimation(ss);

    //Center the ship on the stage
    ship.x = centerX;
    ship.y = centerY;

    //Play the animation
    //ship.play();

    //Play only the normal flying animation
    ship.gotoAndPlay('fly');

    //Add the ship to the stage
    stage.addChild(ship);

    //Setup the ticker
    createjs.Ticker.setFPS(15);

    createjs.Ticker.addListener(function(){
        stage.update();
    });

} //end of init

//Create the blowUp function
function blowUp(){

    //Change the named animation section that plays
    ship.gotoAndPlay('explode');

}
