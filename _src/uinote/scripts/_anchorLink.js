//----------------------------------------------------
// UINOTE AnchorLink Generate
//----------------------------------------------------

  // AnchorLink
  anchorLink = function(){
    var $ancList  = $('.uinote-page-header');
    var $list     = '';
    $('.uinote-module').each(function(){
      var $hash = $(this).attr('id');
      var $hdgTxt = $(this).find('.uinote-module__name').text();
      $list += '<li><a href="#' + $hash + '">' + $hdgTxt + '</a></li>';
    });
    $ancList.after('<nav class="uinote-anchor"><ul class="uinote-anchor__list">' + $list + '</ul><nav>');
  };
  moduleCheck = function() {
    var $cmpt = $('.uinote-module');
    if($cmpt.length > 1) {
      anchorLink();
    }
  }();
