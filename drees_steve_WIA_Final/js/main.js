/**
 * Created by wsdrees on 10/23/14.
 */
Modernizr.load({

    test: Modernizr.inputtypes.date,
    yep: 'js/success.js',
    nope: 'js/fail.js',
    complete: function(){
        //This will run AFTER our test and AFTER our yep or nope file is loaded
        console.log('This runs after our tests');
    }
});

window.onload = function() {
    var theCanvas = document.getElementById('canvasLogo');
    if (theCanvas && theCanvas.getContext) {
        var ctx = theCanvas.getContext("2d");
        if (ctx) {

            var logo = "Alcohol Facts";

            //set the font style
            ctx.font='48px Georgia';
            ctx.fillText(logo,25,50);
        }
    }
};

$(function(){

    $('#gender').hide();

 $('#research').click(function(){

        $('#gender').show('normal');
 })

});