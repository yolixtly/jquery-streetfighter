$(document).ready(function() {
    function doIntro() {
    $('p').fadeIn(2500);
// animation complete.    
}

});
$('.ryu').mouseenter(function() {
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-ready').hide();
        $('.ryu-still').show();
    })
    .mousedown(function() {
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate({
                'left': '63.75rem'
            },
            500,
            function() {
                $(this).hide();
                $(this).css('left', '34rem');
            });
        // NEXT: play hadouken sound 
        // animate it to the right 
        // of the screen
    })
    .mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        // $('.hadouken').hide(); you want the 
        // hadouken to travel to the right and then disapear. so wait
    });
$(document).keydown(function(e) {
    if (e.keyCode == 88) {
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
        $('.ryu-cool').show();
    }
  })
  .keyup(function(e){
      if (e.keyCode ==88) {
          $('.ryu-still').show();
          $('.ryu-cool').hide();
      }
  })

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}

