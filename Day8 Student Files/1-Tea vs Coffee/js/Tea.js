$(function() {

    //Hide the labels and then animate them in
    $('#coffeeNumber').hide();
    $('#teaNumber').hide();

    //Make the animation button work
    $('#moveIt').click(function(){

        //Animate the width of each of the bars
        $('#coffee').animate({width:'567px',height:'50px'},1000);
        $('#coffeeNumber').slideDown(1000);

        $('#tea').animate({width:'300px',height:'50px'},1000);
        $('#teaNumber').slideDown(1000);
    })
		
		
});