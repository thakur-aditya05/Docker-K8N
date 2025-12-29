$(document).ready(function () {
    

    $('#wiki').addClass('myclass')


    $('#wiki').addClass('myclass2')


    $('#wiki').removeClass('myclass2')
    
    $('#wiki').toggleClass('myclass2')


    $('#wiki').css('background-color', 'red')


    console.log($('#wiki1').css('background-color'))






    // ajax 

    // AJAX Using jQuery

    // GET TYPE REQUEST 
    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(data); })

    $.get('https://code.jquery.com/jquery-3.3.1.js', function (data, status) { alert(status); })




    // POST FORMAT 
    $.post('https://code.jquery.com/jquery-3.3.1.js',
        { name: 'harry', channel: 'code with harry' },
        function (data, status) { alert(status) });




});



