$(function() { 
	var canvas= document.getElementById("canvas");
	var ctx =canvas.getContext("2d");

    if(ctx){

        //Set up all of the data that is going to be used for the chart
        var lineChartData={
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],       //x-axis labels
            datasets:[{
                fillColor: 'rgba(166,209,122,.5)',
                strokeColor: 'rgba(166,209,122,1)',
                pointColor: 'rgba(166,209,122,1)',
                pointStrokeColor: '#fff',
                data: [1,20,40,20,60,75,40]     //y-axis
            },{
                fillColor: 'rgba(242,140,185,.5)',
                strokeColor: 'rgba(242,140,185,1)',
                pointColor: 'rgba(242,140,185,1)',
                pointStrokeColor: '#fff',
                data: [15,30,45,60,30,60,75]     //y-axis
            }]



        };

        //Look at the options
        var options={

            //Turn on the bezier Curve
            bezierCurve: true,      //true or false
            scaleGridLineWidth: 50,
            scaleOverride:true,
            scaleSteps:20,
            scaleStepWidth:5,
            scaleStartValue:0,

            onAnimationComplete: done
        };

        //Draw the chart on to the canvas
        var myLine=new Chart(ctx).Line(lineChartData,options);

    }

    function done(){
        //Save image the data url image
        var dataUrl=canvas.toDataURL();

        //Set the image source
        document.getElementById('canvasImg').src=dataUrl;

        //Hide the canvas
        $('#canvas').hide();
    }
		
});