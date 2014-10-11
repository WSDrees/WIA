window.onload = function() {

    var canvas = document.getElementById('canvas1');

    var stage = new createjs.Stage('canvas1');


    //Create a ball
    var ball = new createjs.Shape();

    //Setup the shape and style
    ball.graphics.setStrokeStyle(5, 'round', 'round').beginStroke('black').beginFill('red').drawCircle(0,0,50).endStroke().endFill();

    //Draw a line on the ball so we can see direction
    ball.graphics.setStrokeStyle(1,'round','round').beginStroke('black').moveTo(0,0).lineTo(0,50).endStroke();

    //Move the ball
    ball.x = 100;
    ball.y = -100;

    //Create tween
    //.tween.get(display object, {object properties})
    //Properties - loop, useTicks, ignoreGlobal, etc.
    var tween = createjs.Tween.get(ball,{loop:true}).to({x:ball.x,y:canvas.height-55, rotation:-360},1500,createjs.Ease.bounceOut)
            .wait(1000)       //Timer function OR Delay
            .to({x:canvas.width-55,rotation:360}, 2500,createjs.Ease.bounceInOut)
            .wait(1000).call(tester)
            .to({scaleX:.5,scaleY:.5,x:30,y:canvas.height-30,rotation:-360,alpha:0},2500,createjs.Ease.bounceInOut)
        ;

    stage.addChild(ball);
    stage.update();

    //Ticker function
    //If all you want to do is update your stage with no other changes
    createjs.Ticker.addEventListener('tick',stage);

    function tester(){
        console.log('the function is running');
    }

};

