## Heading Level2

Lorem ipsum dolor sit amet, ea accusam recteque partiendo vis, vim an congue iriure labitur. At vix deleniti luptatum. Viderer virtute eu his, choro tacimates ut eam, eam omnes petentium moderatius ut. Delectus conceptam et cum, his ut graecis theophrastus, eum in sensibus tincidunt contentiones vim.

Lorem ipsum dolor sit amet, ea accusam recteque partiendo vis, vim an congue iriure labitur. At vix deleniti luptatum. Viderer virtute eu his, choro tacimates ut eam, eam omnes petentium moderatius ut. Delectus conceptam et cum, his ut graecis theophrastus, eum in sensibus tincidunt contentiones vim.

### Heading Level3

* Lorem ipsum dolor sit amet, laboramus adolescens duo cu, duo.
* Lorem ipsum dolor sit amet, laboramus adolescens duo cu, duo.
* Lorem ipsum dolor sit amet, laboramus adolescens duo cu, duo.

#### heading Level4

1. Lorem ipsum dolor sit amet, et alienum salutatus appellantur mel, facete euripidis adipiscing per ea, debet bonorum definitionem.
2. Lorem ipsum dolor sit amet, et alienum salutatus appellantur mel, facete euripidis adipiscing per ea, debet bonorum definitionem.
3. Lorem ipsum dolor sit amet, et alienum salutatus appellantur mel, facete euripidis adipiscing per ea, debet bonorum definitionem.

## Code Highlight

### HTML

<textarea class="uinote-code__text" data-code-language="html">
<!--===== code =====-->
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<title>...</title>
</head>
  <body>
    ...
  </body>
</html>
<!--===== /code =====-->
</textarea>

### CSS

<textarea class="uinote-code__text" data-code-language="css">
<!--===== code =====-->
a:link, a:visited, a:hover, a:active {
  background-color: gray;
  color: white;
  padding: 1em 2.5em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}
<!--===== /code =====-->
</textarea>

### Javascript

<textarea class="uinote-code__text" data-code-language="javascript">
<!--===== code =====-->
// hasClass
 function hasClass(ele,cls) {
 return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
// addClass
 function addClass(ele,cls) {
 if (!hasClass(ele,cls)) ele.className += " "+cls;
}
// removeClass
function removeClass(ele,cls) {
 if (hasClass(ele,cls)) {
  var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
  ele.className=ele.className.replace(reg,' ');
 }
}
<!--===== /code =====-->
</textarea>
