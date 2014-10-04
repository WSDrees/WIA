$(function(){

    //Create a function that encapsulates the variables and protects them

    //Setup our show button
    $('#show').click(function(){

        //Click Handler
        $('#theDiv').show('normal');

    });

    //Setup our hide button
    $('#hide').click(function(){

        //Click Handler
        $('#theDiv').hide('fast');
    });

    //Setup our toggle button

    $('#toggle').click(function(){

        $('#theDiv').toggle(2000);
    })




});