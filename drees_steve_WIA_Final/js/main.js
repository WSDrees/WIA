/**
 * Created by wsdrees on 10/23/14.
 */

//Modernizr
Modernizr.load({

    test: Modernizr.inputtypes.date,
    yep: 'js/success.js',
    nope: 'js/fail.js',
    complete: function(){
        //This will run AFTER our test and AFTER our yep or nope file is loaded
        console.log('This runs after our tests');
    }
});

//LOGO

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

    $('.gender').hide();

 $('#research').click(function(){

        $('.gender').show('normal');
 });

    $('#spirit1Number').hide();
    $('#spirit2Number').hide();
    $('#spirit3Number').hide();

    $('#beer').click(function(){
        $('#spirit1').animate({width:'144px',height:'50px'},1000);
        $('#spirit1Number').slideDown(1000);
    });

    $('#wine').click(function(){
        $('#spirit2').animate({width:'140px',height:'117px'},1000);
        $('#spirit2Number').slideDown(1000);
    });

    $('#liquor').click(function(){
        $('#spirit3').animate({width:'92px',height:'57px'},1000);
        $('#spirit3Number').slideDown(1000);
    })

});

google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Type','Percentage'],        //Headings name of the two columns
        ['Beer',36],
        ['Wine', 35],
        ['Hard liquor',23]
    ]);

    var options = {
        title: '2011 study on what most people drink',
        is3D: true,
        pieHole: 0.4
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutChart'));
    chart.draw(data, options);
}