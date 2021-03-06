/*
 Name:
 Date:
 Class & Section:  WIA-####
 Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
 HTML5 Shape Drawing Activity
 1.  Setup the canvas and 2d context
 2.  Draw out each shape in the sections below

 ********************************************/

/*******************************************
 FILE SETUP

 // Setup up 7 different Canvases in index.html one for each problem.
 // Link Modernizr.js
 // Link the main.js file
 // Setup the call to that canvas and get it's 2d context
 //Use Modernizr to verify that your browser supports canvas, include a fallback message


 /*******************************************
 PART 1

 Draw a rectangle starting at point (0 ,0)
 That has a width of 50 px and a height of 100px
 Set the color of the rectangle to a shade of blue.
 Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

 Reminder - set the style first then draw.
 ********************************************/

window.onload=function(){
    var canvas1 = document.getElementById("canvas1");

    //Setting up the 3d drawing context tools
    var ctx = canvas1.getContext("2d");

    if(ctx){

        //Draw a stroked blue rectangle
        ctx.strokeStyle = "black";
        ctx.fillStyle = "blue";
        ctx.lineWidth = 5;

        ctx.fillRect(0,0,50,100);

        //strokeRect( posX, posY, width, height )
        ctx.strokeRect(0,0,50,100);
    }



    /*******************************************
     PART 2

     Draw a circle starting at point (50 ,50)
     That has a radius of 20 px
     Set the color of the circle to a shade of red and set the alpha to .5
     Set the stroke color to black and use a radius of 30px for this circle.

     Reminder - set the style first then draw.
     Use the arc method
     ********************************************/


    var canvas2=document.getElementById("canvas2");
    var ctx2=canvas2.getContext("2d");

    if(ctx2){

        ctx2.fillStyle='rgba(255, 0, 0, .5)';
        ctx2.beginPath();
        ctx2.arc(50,50,20,0, (Math.PI/180)*360,true);
        ctx2.fill();

        ctx2.beginPath();
        ctx2.arc(50,50,30,0, (Math.PI/180)*360,true);
        ctx2.stroke();

    }

    /*******************************************
     PART 3

     Practice using Path drawing.
     Create a 5-point star shaped pattern using the lineTo method.
     Begin this shape at (100, 100)

     Height and width and color are up to you.

     ********************************************/


    var canvas3=document.getElementById("canvas3");
    var ctx3=canvas3.getContext("2d");

    if(ctx3){
        ctx3.strokeStyle="black";
        ctx3.fillStyle='yellow';
        ctx3.lineWidth=5;

        ctx3.lineJoin="round";
        ctx3.beginPath();
        ctx3.moveTo(200,175);
        ctx3.lineTo(235,250);
        ctx3.lineTo(300,250);
        ctx3.lineTo(250,300);
        ctx3.lineTo(275,375);
        ctx3.lineTo(200,325);
        ctx3.lineTo(125,375);
        ctx3.lineTo(150,300);
        ctx3.lineTo(100,250);
        ctx3.lineTo(165,250);
        ctx3.lineTo(200,175);
        ctx3.closePath();

        ctx3.stroke();
    }
    /*******************************************
     PART 4

     Practice drawing with Bezier curves.
     Try drawing the top to an umbrella.
     This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

     Position, height, width and color are your choice.
     Do not overlap any other object.

     ********************************************/

    var canvas4=document.getElementById("canvas4");
    var ctx4=canvas4.getContext("2d");

    if(ctx4){

        //Umbrella handle
        ctx4.strokeStyle='black ';
        ctx4.lineWidth=10;

        ctx4.beginPath();
        ctx4.bezierCurveTo(250,139,300,425,160,275);
        ctx4.stroke();

        ctx4.strokeStyle='blue';
        ctx4.lineWidth=3;

        //Top part of the umbrella

        ctx4.beginPath();
        ctx4.fillStyle='blue';
        ctx4.arc(250,150,100,Math.PI, 2*Math.PI, false);
        ctx4.stroke();

        //Under part of umbrella 1
        ctx4.beginPath();
        ctx4.arc(325,150,25,Math.PI,2*Math.PI, false);
        ctx4.stroke();

        //Under part of umbrella 2
        ctx4.beginPath();
        ctx4.arc(275,150,25,Math.PI,2*Math.PI, false);
        ctx4.stroke();

        //Under part of umbrella 3
        ctx4.beginPath();
        ctx4.arc(225,150,25,Math.PI,2*Math.PI, false);
        ctx4.stroke();

        //Under part of umbrella 4
        ctx4.beginPath();
        ctx4.arc(175,150,25,Math.PI,2*Math.PI, false);
        ctx4.stroke();
        ctx4.closePath();







    }

    /*******************************************
     PART 5

     Practice using text.
     Draw text into your canvas.  It can said whatever you would like in any color.

     ********************************************/

    var canvas5=document.getElementById("canvas5");
    var ctx5=canvas5.getContext("2d");

    if(ctx5){

        //Text shadow settings
        ctx5.shadowColor = 'red';
        ctx5.shadowOffsetX = 3;
        ctx5.shadowOffsetY = 3;
        ctx5.shadowBlur = 7;

        //Text created on the page
        var textString = 'Practice using text';

        //Text style
        ctx5.font='22pt Helvetica';

        //Draw text
        ctx5.fillText(textString,100,100);



    }

    /*******************************************
     PART 6

     Pixel manipulation.
     Draw the image logo.png into the canvas in the following 3 ways.
     1. The image exactly as it is.
     2. Shrink the image by 50%
     3. Slice a section of the logo out and draw that onto the canvas.

     Reminder to use the drawImage method for all 3 of the ways.

     ********************************************/

//Draw images here
    var canvas6=document.getElementById("canvas6");
    var ctx6=canvas6.getContext("2d");

    if(ctx6){

        var srcImg = document.getElementById('logo');

        //Draw the image directly onto the canvas
        //ctx6.drawImage(srcImg,0,0);

        ctx6.drawImage(srcImg,0,0,srcImg.width *.5, srcImg.height *.5);

        //ctx6.drawImage(srcImg,300,150,100,100,50,50,100,100);

    }


    /*******************************************
     PART 7

     Putting it all together.

     Using a combination of all the methods.
     Create a complex scene.
     You must use at least 3 different methods.

     ********************************************/

// Draw scene here
    var canvas7=document.getElementById("canvas7");
    var ctx7=canvas7.getContext("2d");

    if(ctx7){



    }

};