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


$('.photos img').click(function(){
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
      {
          src: 'images/photos/1.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/2.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/3.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/4.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/5.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/6.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/7.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/8.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/9.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/10.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/11.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/12.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/13.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/14.jpg',
          w: 3120,
          h: 4208
      },
      {
          src: 'images/photos/15.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/16.jpg',
          w: 960,
          h: 1280
      },
      {
          src: 'images/photos/17.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/18.jpg',
          w: 1024,
          h: 768
      },
      {
          src: 'images/photos/19.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/21.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/22.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/23.jpg',
          w: 3264,
          h: 2448
      },
      {
          src: 'images/photos/24.jpg',
          w: 2448,
          h: 3264
      },
      {
          src: 'images/photos/25.jpg',
          w: 2448,
          h: 3264
      }
  ];

  var options = {
      history: false,
      focus: false,

      showAnimationDuration: 0,
      hideAnimationDuration: 0

  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
})

});
