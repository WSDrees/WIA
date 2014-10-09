window.onload = function() {
	
    var canvas = document.getElementById("canvas1");
    var stage = new createjs.Stage(canvas);
    
    //Create a shape of a ball
    var ball = new createjs.Shape();
    
    //Setup the sytles
    ball.graphics.setStrokeStyle(5, "round", "round");
    ball.graphics.beginStroke("black");
    ball.graphics.beginFill("red");
    ball.graphics.drawCircle(0,0, 50);
    ball.graphics.endStroke();
    ball.graphics.endFill();
    
    //Draw a line on the ball, so we can see it rotate.
    
    ball.graphics.setStrokeStyle(1, "round", "round");
    ball.graphics.beginStroke("black");
    ball.graphics.moveTo(0,0);
    ball.graphics.lineTo(0, 50);
    ball.graphics.endStroke();
    
    //Move the ball
    ball.x = 100; 
    ball.y = -100;
    
    
    //Create a tween for the ball
    //createjs.Tween.get(display object, {optional properties})
    //properties include - loop, useTicks, ignoreGlobal, etc....
    
    //.to - do something
    //.to({properties to change}, duration for the animation, easing4)
    //.wait - timer function
    
    var tween = createjs.Tween.get(ball, {loop:true})
        .to({x:ball.x, y:canvas.height-55, rotation:-360}, 1500, createjs.Ease.bounceOut)
        .wait(1000)
        .to({x:canvas.width-55, rotation:360}, 2500, createjs.Ease.bounceOut)
        .wait(1000).call(tester)
        .to({scaleX:.5, scaleY:.5, x:30, rotation:-360, alpha:0}, 2500, createjs.Ease.bounceOut);
    
    
    
    
    //Add the ball to the stage
    stage.addChild(ball);
    
    
    function tester(){
        console.log("Animation is working!");
        
    }
    
    
    //Ticker to update the stage
    
    createjs.Ticker.addEventListener("tick", stage);
    
    
    
}

