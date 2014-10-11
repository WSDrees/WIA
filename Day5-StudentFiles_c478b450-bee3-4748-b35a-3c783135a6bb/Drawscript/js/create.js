window.onload = function() {
	console.log('test');
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);
	
	//create a graphic 
	var shape = new createjs.Shape();
	
	//Draw The Shape
    //Prefix is shape.graphics.
    shape.graphics.f("rgba(0,0,0,254)").p("EAwmA38YAAAKgKAKgKAAYAAAKgKAAAAAAYgKAAAAgKgKAAIhQhaYiMCqkEBukOAAYkYAAj6huiMiqIhaBaYAAAAgKAKgKAAYAAAAAAAAgKgKYgKAAgKgKAAgKIAAlAYAAgKAUgUAKAAIFAAAYAKAAAKAKAKAKYAAAKAAAKgKAKIhaBaYBQBuCgBQCqAUIAApEIiqAAYgeAAgegUAAgeIAAh4YAAgeAegeAeAAICqAAIAAiMYhGgogohGAAhaYAAiCBkhkCCAAYB4AABuBkAACCYAABagyBGhGAoIAACMICqAAYAoAAAUAeAAAeIAAB4YAAAegUAUgoAAIiqAAIAAJEYC0gUCWhQBQhuIhQhaYgKgKgKgKAKgKYAAgKAKgKAUAAIE2AAYAUAAAKAUAAAKIAAFA").cp().ef().f("rgba(255,255,255,254)").p("EAkGAlCYgeAAgeAeAAAeYAAAeAeAeAeAAYAeAAAUgeAAgeYAAgegUgegeAA").cp().ef();






	stage.addChild(shape);
	// Then we update the stage to draw it up
	stage.update();

};