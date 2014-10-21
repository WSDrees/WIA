/**
 * Created by wsdrees on 6/21/14.
 */

$(function(){

    $('#mapForm').change(function(){
        var selectedContinent = $('#mapForm option:selected').val();

        if( selectedContinent == 'ALL' ){
            $('a.dot').show(1000);
        }else{
            //1000 milliseconds = 1 second
            $('a.dot[continent*="'+selectedContinent+'"]').show(1000);
            $('a.dot[continent!="'+selectedContinent+'"]').hide(1000);
        }
    });
//return the value of the dot that was clicked on
    $('a.dot').click(function(){
        //alert( $(this).attr('city') );
        //make the dot selected GREEN
        $('a.dot').removeClass('selected');
        $(this).addClass('selected');

        var city = '.city_detail#' + $(this).attr('city');
        var htmlCode = $(city).html();

        $('.detail_container').fadeOut(500, function(){
            $('.detail_container .city_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);

        });
    });
});
