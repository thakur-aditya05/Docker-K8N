$(document).ready(function () {
    
    // Events in jQuery
    // Mouse events = click, dblclick, mouseenter, mouseleave
    // KeyboardEvent = keypress, keydown, MediaKeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    // $('#btn').click(function () {
    //     $('#wiki').toggle(1000);
    // });

    // fadeIn()
    // fadeOut()
    // fadeToggle()
    // fadeTo()
    
    $('#btn').click(function () {
        $('#wiki').fadeOut(1000);
    });


    // Slide methods - speed and callback parameters are optional
    $('#wiki').slideUp(1000, function(){
        console.log('done');
    })

    $('#wiki').slideDown(1000) // 2nd function is callBack

    $('#wiki').slideToggle(1000) // 2nd function is callBack 




    // animate property can have multiple attributes   
    $('#wiki').animate({ opacity: 0.3 }, 4000); // opacity beacomes 0.3 affter 4sec
    $('#wiki').animate({ opacity: 1 }, 1000);  // opacity become 0.9 second 
    $('#wiki').animate({ width: '350px' }, 12000);  // width beacome 350px 

      // multi animation property 
      $('#wiki1').animate({
          opacity:0.5,
          height: '150px',
          width:'350px'

      },1000);  // this is affter 1000 seconds do all animations 











});