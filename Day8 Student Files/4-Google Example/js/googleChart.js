//Load google vis library

google.load('visualization','1',{packages:['corechart']});

//Once the library is loaded, then run a function
google.setOnLoadCallback(drawChart);

//Create the drawChart function
function drawChart(){

    //Create a data table using an array
    var data=google.visualization.arrayToDataTable([

        ['Type','Percentage'],        //Headings name of the two columns
        ['Beer',36],
        ['Wine', 35],
        ['Hard liquor',23]

    ]);

    //Options for the chart
    var options = {
        title: '2011 study on what most people drink',
        // is3D:true
        pieHole:.4,
        pieSliceText:"value", //"percentage","value","label"
        pieStartAngle:-90,
        //width:500,
        //height:500
        //legend:'left'
        legend:{position:'labeled'},

        //turn tooltip off
        tooltip:{trigger:'none'},
        slices:{
            1:{offset:'.2'},
            2:{offset:'.4'}
        }
    };


    //Create the chart variable and tell it where to go
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));


    //Draw the chart
    chart.draw(data,options);
}