window.onload = function() {
	
    var canvas = document.getElementById("canvas");
    var stage = new createjs.Stage(canvas);
    
    
    var ship= new createjs.Bitmap("images/ship.png");
    
    //Center it again
    
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;
    
    //Set our x&& and our registration points
    ship.x = centerX;
    ship.y = centerY;
    ship.regX = 50;
    ship.regY=50;
    
    //Add to stage
    stage.addChild(ship);
    
    //Set the frame rate
    createjs.Ticker.setFPS(30);
    
    //Add Event listener
    createjs.Ticker.addEventListener("tick", tick);
    
    
    function tick(e){
        //Shake the ship
        //ship.x = centerX + (Math.random()-.5) *50;
        //ship.y = centerY + Math.random() * 20;
        
        //Create wave motions using sin & cos
        
        //ship.x = centerX + Math.sin(3);
        
        // /# controls speed, the *# controls distance away from center
        
       //ship.x = centerX + Math.sin(createjs.Ticker.getTicks()/35)*300;
        
        //ship.y = centerY + Math.sin(createjs.Ticker.getTicks()/5)* 100;
        
        //Circle Path
        
        ship.x = centerX + (Math.sin(createjs.Ticker.getTicks()/7)*100);
        ship.y = centerY + (Math.cos(createjs.Ticker.getTicks()/7)*50);
        
        stage.update();
        
    }
    
    
    
    
    
			
}