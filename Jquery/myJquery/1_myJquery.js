$(document).ready(function () {
    
    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // mouse enter 
    $('p').mouseenter(function(event){
        console.log(`${event.type} is altered`)
    })




    // $(selector).on(event, childSelector, data, function)

    
    
    // demoing the on method
    $('p').on({
        click: function () {
            console.log('Thanks for clicking', this);
        },mouseleave: function () {
            console.log("mouseleave");
        }
    })


    $('.p1').on('click', function() {
      alert('Button clicked!');
    });



    $('.p2').on('focus blur', function(event) {
      console.log('Triggered event:', event.type);
    });



    $('.p3').on('click', '.child', function() {
      console.log('Clicked a dynamic child element');
    });



    $('.p4').on('click', { msg: 'Hello' }, function(event) {
      alert(event.data.msg);
    });


    $('#wiki').hide(5000 ,function () {
      console.log("hide function is been applied");
    });
    $('#wiki').show(5000 ,function () {
      console.log("show function is been applied");
    });

});