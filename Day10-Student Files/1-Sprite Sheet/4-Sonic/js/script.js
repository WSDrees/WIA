

function init() {
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;

    var swirl;

    //Setup our sprite sheet
    var ss = new createjs.SpriteSheet({

        //images - location of the sprite sheet
        images:['images/helix.png'],

        //frames - how big and where
        frames:{
            width:100,
            height:100,
            regX:50,
            regY:50
        }
    });
	
    //Setup bitmap animation
    swirl=new createjs.BitmapAnimation(ss);

    //Center our swirl
    swirl.x=centerX;
    swirl.y=centerY;

    //Play animation
    swirl.play();

    //Add swirl to our stage
    stage.addChild(swirl);

    createjs.Ticker.setFPS(20);

    createjs.Ticker.addListener(function(){

        stage.update();

    });
	
} //end of init

	