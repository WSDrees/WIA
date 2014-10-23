//Instead of using the html5 date picker - let's use the jQuery one

console.log('Browser does not support html5 datepicker');

$('input[type=date]').datepicker({

    dateFormat: "mm/dd/yy"

});