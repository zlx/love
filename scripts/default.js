$.noConflict();
jQuery( document ).ready(function( $ ) {
  var lastScrollTop = 0;
  var didScroll = false;
  var delta = 20;
  var navbarHeight = $('.header-container').outerHeight();

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (st > lastScrollTop && st > navbarHeight){
      $('.header-container').animate({'margin-top': '-100px'}, 500);
    } else if (st < lastScrollTop && st - delta < 100) {
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
  });

  window.setInterval(function(){
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 400);


  // $(".video-player-button").click(function(e){
  //   source = document.createElement('source');
  //   $(source).attr('type', 'video/mp4');
  //   $(source).attr('src', $(this).data('videosrc'));
  //   obj = $('<video />').attr({
  //     id: 'video-player',
  //     class: 'video-js',
  //     controls: '',
  //     preload: 'auto'
  //   });
  //   $(obj).append(source);
  //   $('.video-container').append(obj);
  //
  //   $(this).hide();
  //   videojs('video-player', { fluid: true }, function(){
  //     this.load();
  //   });
  // })

  $(".video-player-button").click(function(e){
    source = document.createElement('source');
    $(source).attr('type', 'video/mp4');
    $(source).attr('src', $(this).data('videosrc'));
    obj = $('<video />').attr({
      id: 'video-player',
      autoplay: '',
      controls: ''
    });
    $(obj).append(source);
    $('.video-container').append(obj);
    $(this).hide();
  })

});
