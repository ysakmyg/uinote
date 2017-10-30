# UINOTE

UI Component Note Template  

DEMO
https://uinote.ysakmyg.com/

## Description

This is a template for creating "component note".

## Dependence

* [Node.js](https://nodejs.org/ja/) v8.7.0
* [gulp.js](https://gulpjs.com/) v5.4.2
* [jQuery](https://jquery.com/) v3.2.1


## EditorConfig

* [EditorConfig](http://editorconfig.org/#download)

## Node.js

* [Node.js](https://nodejs.org/ja/)

### Node.js version

* [nodenv](https://github.com/nodenv/nodenv)
* [nodebrew](https://github.com/hokaccha/nodebrew)

## Usage

```bash
$cd pjroot
```

```bash
$npm install
```

### watch

```bash
$npx gulp
```

Perform the following tasks.

* Starting the local server
* SSass (SCSS) file watch, combining, compiling, compression
* Javascript file wtach, coupling, compression

* Optimization of image file (independent task)

```bash
npx gulp project_images //For Project
npx gulp uinote_images //For UINOTE
```

## File

```text

├── _src　＃For Development
│   ├── project　＃For Project
│   │   └── assets
│   │       ├── images　＃Project Image(*)
│   │       │   ├── jpg
│   │       │   │   └── danbo.jpg
│   │       │   └── png
│   │       │       └── logo.png
│   │       ├── scripts　＃Project JS(*)
│   │       │   ├── _partial01.js
│   │       │   ├── _partial02.js
│   │       │   └── _partial03.js
│   │       └── styles　＃Project Sass(SCSS)(※)
│   │           ├── foundation
│   │           │   ├── _config.scss
│   │           │   ├── _global.scss
│   │           │   ├── _mixin.scss
│   │           │   ├── _reset.scss
│   │           │   └── _variable.scss
│   │           ├── object
│   │           │   ├── component
│   │           │   │   ├── _button.scss
│   │           │   │   ├── _color.scss
│   │           │   │   ├── _forms.scss
│   │           │   │   ├── _grid.scss
│   │           │   │   ├── _table.scss
│   │           │   │   └── _typography.scss
│   │           │   ├── project
│   │           │   └── utility
│   │           │       ├── _fixedwidth.scss
│   │           │       ├── _margin.scss
│   │           │       ├── _print.scss
│   │           │       ├── _text.scss
│   │           │       ├── _vertical.scss
│   │           │       ├── _visibility.scss
│   │           │       ├── _whitespace.scss
│   │           │       └── _width.scss
│   │           ├── project-app.scss
│   │           └── structure
│   │               ├── _footer.scss
│   │               ├── _globalnav.scss
│   │               └── _header.scss
│   └── uinote　#For UINOTE
│       ├── assets
│       │   ├── images
│       │   │   └── uinote_logo.svg
│       │   ├── include　＃include file・SSI(.htaccess)
│       │   │   ├── footer.html
│       │   │   ├── glovalnav.html　＃Menu Html(※)
│       │   │   ├── header.html
│       │   │   └── timestamp
│       │   │       ├── _project_scripts.html
│       │   │       ├── _project_styles.html
│       │   │       ├── _uinote_scripts.html
│       │   │       └── _uinote_styles.html
│       │   ├── scripts
│       │   │   ├── _anchorLink.js
│       │   │   ├── _backtoTop.js
│       │   │   ├── _globalMenu.js
│       │   │   ├── _moduleDisplay.js
│       │   │   └── _nullLink.js
│       │   └── styles
│       │       ├── foundation
│       │       │   ├── _config.scss
│       │       │   ├── _global.scss
│       │       │   ├── _mixin.scss
│       │       │   └── _variable.scss
│       │       ├── object
│       │       │   ├── component
│       │       │   │   ├── _anchor.scss
│       │       │   │   ├── _code.scss
│       │       │   │   ├── _grid.scss
│       │       │   │   ├── _icons.scss
│       │       │   │   ├── _module.scss
│       │       │   │   ├── _pageheader.scss
│       │       │   │   └── _pagetop.scss
│       │       │   ├── project
│       │       │   │   ├── _colorbox.scss
│       │       │   │   └── _intro.scss
│       │       │   └── utility
│       │       │       └── _print.scss
│       │       ├── structure
│       │       │   ├── _footer.scss
│       │       │   ├── _globalnav.scss
│       │       │   ├── _header.scss
│       │       │   └── _layout.scss
│       │       └── uinote.scss
│       └── html　＃Component HTML(※)
│           ├── basic
│           │   ├── colors.html
│           │   ├── example.html　＃ExamplePage(※)
│           │   └── typography.html
│           ├── components
│           │   ├── button.html
│           │   ├── forms.html
│           │   └── grid.html
│           ├── intro.md　＃index.html(Markdown)
│           ├── _template
│           │   ├── _index.html
│           │   └── _template.html
│           └── utilities
│               └── index.html
├── htdocs　＃Output folder (not editable)
│   ├── assets
│   │   ├── css
│   │   │   ├── sample.app.min.css
│   │   │   └── uinote.min.css
│   │   ├── images
│   │   │   ├── jpg
│   │   │   │   └── danbo.jpg
│   │   │   ├── png
│   │   │   │   └── logo.png
│   │   │   └── uinote_logo.svg
│   │   ├── include
│   │   │   ├── footer.html
│   │   │   ├── glovalnav.html
│   │   │   ├── header.html
│   │   │   ├── intro.html
│   │   │   └── timestamp
│   │   │       ├── _project_scripts.html
│   │   │       ├── _project_styles.html
│   │   │       ├── _uinote_scripts.html
│   │   │       └── _uinote_styles.html
│   │   └── js
│   │       ├── sample.app.min.js
│   │       └── uinote.min.js
│   ├── basic
│   │   ├── colors.html
│   │   ├── example.html
│   │   └── typography.html
│   ├── components
│   │   ├── button.html
│   │   ├── forms.html
│   │   └── grid.html
│   ├── index.html
│   └── utilities
│       └── index.html
```
(*)＝　Edit file

## License
MIT © [ysakmyg](https://github.com/ysakmyg)

