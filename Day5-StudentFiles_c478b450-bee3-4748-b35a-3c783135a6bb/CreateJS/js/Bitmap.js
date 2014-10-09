window.onload = function() {
	
    var canvas = document.getElementById("canvas");
	var stage =  new createjs.Stage("canvas");
    
    var bmp = new createjs.Bitmap();
    
    //Create our image variable
    var img = new Image();
    img.src = "images/ship.svg";
    img.onload = updateStage;
    
    
    function updateStage(e){
        
        //Create a bitmap variable to hold our image in createJS
        bmp = new createjs.Bitmap(e.target);
        
        //Set our X & Y to place the image in the center of canvas
        
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;
        
        bmp.x = centerX;
        bmp.y = centerY;
        
        bmp.regX = 50;
        bmp.regY = 50;
        
        //Scale the ship up
        bmp.scaleX = 4;
        bmp.scaleY = 4;
        
        
        stage.addChild(bmp);
        //stage.update();

        
    }
    
    
    
    //add eventlistener to hear our  "tick"

    
    createjs.Ticker.addEventListener("tick", tick);
    
    function tick(e){
        
        //This function will be called default of 20 fps
        
        bmp.rotation +=2;
        
        bmp.x +=2;
        bmp.y +=2;
        
        
        stage.update();
        
        
    }
    
			
}