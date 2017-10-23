//----------------------------------------------------
// UINOTE Global Menu
//----------------------------------------------------

// Global Menu Overlay
globalMenu = function() {
  var $unBody    = $('.uinote');
  var $closeBtn  = $('.uinote-global-nav__close');
  var $menuBtn   = $('.uinote-menu-btn');
  var $parentElm = $('.uinote-global-nav li [data-toggle="collapse"]');
  $unBody.append('<div class="uinote-overlay"/>');
  $menuBtn.on('click',function(){
    $unBody.addClass('is-overlay');
    $parentElm.attr('tabindex','0');
    $menuBtn.attr('aria-expanded','true');
    setTimeout(function(){
      $closeBtn.focus();
    },350);
  });
}();

// Global Menu Overlay Close
overlayClose = function() {
  var $unBody    = $('.uinote');
  var $closeElm  = $('.uinote-overlay,.uinote-global-nav__close');
  var $menuBtn   = $('.uinote-menu-btn');
  var $parentElm = $('.uinote-global-nav li [data-toggle="collapse"]');
  $closeElm.on('click', function(){
    $unBody.removeClass('is-overlay');
    $parentElm.attr('tabindex','-1');
    $menuBtn.attr('aria-expanded','false').focus();
  });
}();

// trapTabKey
trapTabKey = function(){
  var $closeBtn = $('.uinote-global-nav__close');
  var $lastElm 	= $('.uinote-global-nav__list > li:last-child a');
  $closeBtn.on('keydown',function(e) {
    if(e.shiftKey && e.key === 'Tab') {
      e.preventDefault();
      $lastElm.focus();
    }
  });
  $lastElm.on('keydown',function(e) {
    if(e.shiftKey && e.key === 'Tab') {
      e.stopPropagation;
    }else if(e.key === 'Tab'){
      e.preventDefault();
      $closeBtn.focus();
    }
  });
}();

// Global Menu Tree
menuTree = function() {
  var $locationPath  = location.pathname,
      $directoryName = $locationPath.substring(0, $locationPath.lastIndexOf('/')).replace('/',''),
      $lacationHref  = window.location.href;
      $parentElm     = $('.uinote-global-nav li [data-toggle="collapse"]');
      $childElm      = $('.uinote-global-nav li ul[aria-hidden]');
      $navLink       = $('.uinote-global-nav li a');
  // Link add Active Class
  $navLink.filter(function() {
    return $(this).prop('href') === $lacationHref ;
  }).parent('li').addClass('is-active');
  // Parent add Active Class
  $parentElm.each(function() {
    var $parentName = $(this).html().toLowerCase();
    $(this).parent('li').addClass($parentName);
    if($directoryName == $parentName){
      $(this).attr('aria-expanded','true');
      $(this).next('ul').attr('aria-hidden','false');
    };
  });
  // ParentToggle
  $parentElm.on('click',function(){
    var $ariaExp  = $(this).attr('aria-expanded');
    var $childHdn = $(this).next('ul').attr('aria-hidden');
    var $childFcs = $(this).next('ul').find('a').attr('tabindex');
    $(this).attr('aria-expanded', $ariaExp == 'false' ? 'true' : 'false');
    $(this).next('ul').attr('aria-hidden', $childHdn == 'true' ? 'false' : 'true');
  });
  $parentElm.on('keydown',function(e){
    if(e.key === 'Enter'){
      $(this).click();
    }
  });
}();
