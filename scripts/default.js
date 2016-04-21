$.noConflict();
jQuery( document ).ready(function( $ ) {
  var lastScrollTop = 0;
  var didScroll = false;
  var delta = 20;
  var navbarHeight = $('.header-container').outerHeight();

  function hasScrolled() {
    var st = $(this).scrollTop();
    console.log("header-container:" + navbarHeight);
    console.log("st:" + st);
    console.log("lastScrollTop:" + lastScrollTop);

    // Make sure they scroll more than delta
    // if(Math.abs(lastScrollTop - st) <= delta)
    //     return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        $('.header-container').animate({'margin-top': '-100px'}, 500);
    } else if (st < lastScrollTop && st - delta < 100) {
        // st 120, mt: -100px
        // st 20, mt: 0px
        if (st - delta > 0) {
          $('.header-container').css('margin-top', -(st-delta) + 'px');//, 50);
        } else {
          $('.header-container').css('margin-top', '0px');
        }
    }

    lastScrollTop = st;
  }

  $(window).scroll(function(event){
    didScroll = true;
    // hasScrolled();
  });

  window.setInterval(function(){
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 400);

});
