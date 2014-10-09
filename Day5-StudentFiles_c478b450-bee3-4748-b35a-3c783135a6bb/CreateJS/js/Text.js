window.onload = function() {
	
    var canvas = document.getElementById("canvas1");
    
    var stage = new createjs.Stage(canvas);
    
     //Create a variable to our text
    
    var sentence = new createjs.Text();
    
    //Use the text property of the text
    
    sentence.text = "This sentence is about nothing...or is it?";

    //Font properties  - most normal CSS
    sentence.font = "bold 30px Times New Roman";
    
    //Pick a color 
    sentence.color="blue";
    
    //Text is a display object, it inherts ALL of the properties of display objects
    
    sentence.x = 150;
    sentence.y = 50;
    //sentence.rotation = 30;
    
    //Text also has special properties
    //textAlign - "left", "right", "center"
    sentence.textAlign = "left";
    
    //Wrap our text
    sentence.lineWidth = 200;
    
    //Change the space inbetween each of the lines - lineHeight
    sentence.lineHeight = 50;
    
    //Stroke the outside of the text
    sentence.outline = true;
    
    //Compact the code
    //Can specify them all at once
    
    var sentence2 = new createjs.Text("This is another sentence!", "bold 30px Times", "blue");
    
    
    //Add to stage next
    stage.addChild(sentence);
    stage.addChild(sentence2);
    
    stage.update();
    
    
}