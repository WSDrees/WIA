//Test if the user has use of the new date picker in html5
//If they do, lets run the success.js file
//If they don't, lets run the fail.js file

Modernizr.load({

    test: Modernizr.inputtypes.date,
    yep: 'js/success.js',
    nope: 'js/fail.js',
    complete: function(){

        //This will run AFTER our test and AFTER our yep or nope file is loaded

        console.log('This runs after our tests');

    }




});