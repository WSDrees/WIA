(function($){

    /*==================================== Get time ===============================================*/
    function updateClock ( )
    {
        var currentTime = new Date ( );
        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );

        // Pad the minutes and seconds with leading zeros, if required
        currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;

        // Choose either "AM" or "PM" as appropriate
        var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

        // Convert the hours component to 12-hour format if needed
        currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

        // Convert an hours component of "0" to "12"
        currentHours = ( currentHours == 0 ) ? 12 : currentHours;

        // Compose the string for display
        var currentTimeString = currentHours + ":" + currentMinutes + ' ' +timeOfDay;

        $("#time").html(currentTimeString);
    }
    /*==================================== Search results ===============================================*/
    var html="";
    var q;
    var courses;
    var resultsContainer;
    var noMatch = function(){
        var html = ''+
                '<p>No Results found.</p>'+
                '<p style="font-size:10px;">Try searching for "Pine Hills".  Just an idea.</p>'
            ;
        resultsContainer.html(html);
    };
    var validate = function(query){

        // Trim whitespace from start and end of search query
        while(query.charAt(0) == ""){
            query = query.substring(1, query.length);
        }
        while(query.charAt(query.length-1) == ""){
            query = query.substring(0, query.length-1);
        }
        // Check search length, must have 3 characters
        if(query.length < 2){
            alert("Your search query is too small, try again.");
            // (DO NOT FIX THE LINE DIRECTLY BELOW)
            searchInput.focus();
            return;
        }else{
            search(query);
        }
    };
// Finds search matches
    var search = function(query){

        // split the user's search query string into an array
        queryArray = query.split(" ");
        // array to store matched results from data.json
        var results = [];
        // loop through each index of courses array
        for(var i = 0, j= courses.length; i < j; i ++){

            // each course[i] is a single course item
            // save a lowercase variable of the courseName
            var dbitem = courses[i].courseName.toLowerCase();

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for(var ii = 0; ii < queryArray.length; ii++){
                var qitem = queryArray[ii].toLowerCase();
                // is the keyword anywhere in the course name?
                // If a match is found, push full courses[i] into results array
                var compare = dbitem.indexOf(qitem);

                if(compare !== -1){
                    results.push(courses[i]);
                }
            }
            results.sort();
            // Check that matches were found, and run output functions
            if(results.length === 0){
                noMatch();
            }else{
                showMatches(results);
            }
        }
    };
    var getdata=function(){

        $.ajax({
            url: "js/data.json",
            dataType: 'json',
            success: function(response){
                courses = response.courses;
                $.each(response.courses, function(i,item){
                    courses[i] = response.courses[i];
                });
            }
        });

    };
    var showMatches = function(results){
        var html='';
        $.each(results, function( index, course ) {
            html += '<h3 class="cname">'+'Name: '+course.courseName +'</h2> ' +
                '<p class="cloc">'+'Location: '+course.courseLocation +'</p>' +
                '<p class="cpar">'+'Par: '+course.par +'</p>' +
                '<p class="cdistance">'+'Distance: '+course.distance +'</p>' +
                '<p class="cdesc">'+'Description: '+course.description +'</p>' +
                '<p class="hrow">'+'<hr>'+'</p>';
        });
        resultsContainer.html(html);
    };


    /* ======================== Sign Up ===================== */
    $('.sign_up').click(function(){
        window.location.assign('register.html');
    });

    /* ======================== LogOut ===================== */
    $('#logOut').click(function(){
        window.location.assign('home.html');
    });

    /* ======================== Score Card ===================== */
    $('.scorecardbtn').click(function(){
        window.location.assign('scorecard.html');
    });

    /* ======================== Favorite Courses ===================== */
    $('.favoritesbtn').click(function(){
        window.location.assign('favorite.html');
    });

    /* ======================== Registration ===================== */
    $('.register').click(function(){
        window.location.assign('admin.html');
    });

    /* =========================== Accordion For Projects Page ============== */

    $('ul.tabs').each(function(){
        //for each set of tabs, we want to keep track of which tab is active and it's associated content

        var $active, $content, $links = $(this).find('a');

        //If the location.hash matches one of the links, use that as the active tab.
        //If no match is found, use the first link as the initial active tab.

        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        //Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        //Bind the click event handler
        $(this).on('click', 'a', function(e){

            //Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            //Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            //Make the tab active
            $active.addClass('active');
            $content.show();

            //Prevent the anchor's default click action
            e.preventDefault();
        });
    });

    setInterval('updateClock', 1000);

    //gets data from json file
    getdata();
    resultsContainer = $('#results');

    //on search
    $('#searchForm').on('submit', function(){
        q =  $('#search').val();
        validate(q);
        return false;
    });
    updateClock();

    //===================INTERACTIVE MAP======================

    $('a.dot').click(function(){
        $('a.dot').removeClass('selected');
        $(this).addClass('selected');

        var course = '.courseDetail#' + $(this).attr('course');
        var htmlCode = $(course).html();

        $('.courseDetailContainer').fadeOut(500,function(){
            $('.courseDetailContainer .courseOverview').html(htmlCode);
            $('.courseDetailContainer').fadeIn(500);
        })

    });



    /*==================================== END EVENTS===============================================*/

})(jQuery); // end private scope