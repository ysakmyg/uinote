//----------------------------------------------------
// UINOTE Back to Pagetop
//----------------------------------------------------

  // Pagetop Scroll Animation
  pageTopLink = function() {
    var $pageTop = $(".uinote__pagetop a");
    var onAnimate = function(){
      if($(this).length == 0) return false;
        var $speed = 500;
        var $target = $('body,html');
        var $position = $target.offset().top;
        $('body,html').animate({scrollTop:$position}, $speed, 'swing');
        return false;
    }
    $pageTop.on('click', onAnimate);
  }();


  // Nav visible Fade(pagetop link)
  visibleFade = function() {
    var $nav = $('.uinote__pagetop');
    var onVisible = function() {
      if ($(window).scrollTop() > 100) {
         $nav.fadeIn();
      } else {
         $nav.fadeOut();
      }
    }
    $(window).on('scroll', onVisible);
    $('body').on('touchmove', onVisible);
  }();


  // Nav Bottom Position
  bottomPosition = function() {
    var $nav            = $('.uinote__pagetop');
    var $navPosition    = $nav.css("bottom").replace(/[^-\d\.]/g, '');
    var $footerHeight   = $('.uinote-footer').outerHeight();
    var $bottomPosition = parseInt($footerHeight) + parseInt($navPosition);
    var onAdjust = function(){
      var $scrollTop     = $('html').scrollTop() || $('body').scrollTop();
      var $scrollBottom  = $('html').get(0).scrollHeight - $('html').get(0).clientHeight - $scrollTop;
      if ($scrollBottom <= $footerHeight) {
        $nav.addClass('is-bottom').css({"bottom":$bottomPosition});
      } else {
        $nav.removeClass('is-bottom').css({"bottom":""});
      }
    }
    $(window).on('scroll', onAdjust);
    $('body').on('touchmove', onAdjust);
  }();
