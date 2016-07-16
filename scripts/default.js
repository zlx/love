$.noConflict();
jQuery( document ).ready(function( $ ) {

  if (window.screen.width > 320) {
    $('.video-player-button').attr('src', 'images/player.png')
  }

  $(".video-player-button").click(function(e){
    source = document.createElement('source');
    $(source).attr('type', 'video/mp4');
      $(source).attr('src', 'http://zlx-videos.qiniudn.com/love-site/memory-slide-360.m4v');
    obj = $('<video />').attr({
      id: 'video-player',
      autoplay: '',
      controls: ''
    });
    $(obj).append(source);
    $('.video-container').append(obj);
    $(this).hide();
  })

  $(".wedding-slick").slick({
    arrows: false,
    slidesToShow: 1,
    dots: true
  });

});
