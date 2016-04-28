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

  if (window.screen.width < 960) {
    $('.video-player-button').attr('src', 'images/player-320.png')
  }

  $(".video-player-button").click(function(e){
    source = document.createElement('source');
    $(source).attr('type', 'video/mp4');
    // if (window.screen.width > 960) {
    //   $(source).attr('src', 'http://zlx-videos.qiniudn.com/love-site/memory-slide.m4v');
    // } else {
      $(source).attr('src', 'http://zlx-videos.qiniudn.com/love-site/memory-slide-360.m4v');
    // }
    obj = $('<video />').attr({
      id: 'video-player',
      autoplay: '',
      controls: ''
    });
    $(obj).append(source);
    $('.video-container').append(obj);
    $(this).hide();
  })

  $(".bless-submit").click(function(){
    var form = new FormData();
    form.append("author", $("#bless-author").val());
    form.append("body", $("#bless-body").val());

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://love-site-backend.herokuapp.com/bless",
      "method": "POST",
      "processData": false,
      "contentType": false,
      "headers": {
        'Access-Control-Allow-Origin': '*'
      },
      "mimeType": "multipart/form-data",
      "data": form
    }

    $.ajax(settings).done(function (response) {
      $("#bless-author").val('');
      $("#bless-body").val('');
      alert("感谢你的祝福！");
    });
  })

});
