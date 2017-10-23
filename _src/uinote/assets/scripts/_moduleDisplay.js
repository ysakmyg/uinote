//----------------------------------------------------
// UINOTE Module Display
//----------------------------------------------------

  // DisplayId
  displayId = function(){
    $('.uinote-module').each(function() {
      var $this = $(this);
      var $id = $this.attr('id');
      $this.prepend('<span class="uinote-module__id">Module-ID : ' + $id + '</span>');
    });
  }();

  // Module Title Link
  moduleLink = function(){
    $('.uinote-module').each(function(){
      var $hash = $(this).attr('id');
      var $hdg  = $(this).find('.uinote-module__name');
      $hdg.append('&#8194;<a href="#' + $hash + '">link</a>');
    });
  }();

  // Module ConvertCode
  codeSample = function() {
    var $view = $('.uinote-module__preview[data-code-display="true"]');
    var $code = $('.uinote-module__code');
    var $targets = ["&", "<", ">" ,'"', "'"];
    var $escapes = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];
    var $comment = /<!--=====[\^co\s\S]*?=====-->/g;
    var $checked = 'checked=""';
    var $disabled = 'disabled=""';
    $view.after('<pre class="uinote-module__code"><code class="html"></code></pre>');
    $view.each(function() {
      var $converted = $(this).html();
      for(var i=0; i < $targets.length; i++){
        $converted = $converted.trim($converted)
        .replace(new RegExp($targets[i],'g'),$escapes[i])
        .replace($comment ,'')
        .replace($checked ,'checked')
        .replace($disabled ,'disabled');
      }
      $(this).next($code).children().html($converted);
    });
  }();

  // Code Display ConvertCode
  codePrevie = function() {
    var $view = $('.uinote-code__text');
    var $targets = ["&", "<", ">" ,'"', "'"];
    var $escapes = ["&amp;", "&lt;", "&gt;", "&quot;", "&#39;"];
    var $comment = /<!--=====[\^co\s\S]*?=====-->/g;
    $view.each(function() {
      var $converted = $(this).val();
      var $language = $(this).attr('data-code-language');
      if($language == undefined) {
        var $language = 'html';
        var $dataLanguage = '';
      }else{
        var $dataLanguage = ' data-code-language="'+ $language +'"';
      }
      for(var i=0; i < $targets.length; i++){
        $converted = $converted.trim($converted)
        .replace(new RegExp($targets[i],'g'),$escapes[i])
        .replace($comment ,'');
      }
      $(this).before('<pre class="uinote-code"'+ $dataLanguage +'"><code class="'+ $language +'">'+$converted+'</code></pre>').remove();
    });
  }();

  // lineNumber
  lineNumber = function(e) {
    var $regExp = /\r\n|\r|\n/g;
    var $newline = $(e).text().match($regExp);
    var $number = $('<span class="uinote-module__line-number">');
    if($newline == null){
      $number.append('1');
    }else{
      for (var i = 1; i <= $newline.length + 1; i++) {
        var $count = i + '\n';
        $number.append($count);
      }
    }
    $(e).before($number);
  };

  // highlightCode(Use highlight.js)
  highlightCode = function(){
    $('.uinote-module__code code, .uinote-code code').each(function(e) {
      hljs.highlightBlock(this);
      lineNumber (this);
    });
  }();
