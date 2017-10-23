# UINOTE

Front-end component development template  
UIコンポーネント開発環境 / コンポーネント管理用テンプレート

## Description

UIのコンポーネント化（部品化）にて、各コンポーネントを組み合わせてページを生成するために使用する「コンポーネント集」を作成する開発環境及びテンプレートです。

## Dependence

* [Node.js](https://nodejs.org/ja/) v8.7.0
* [gulp.js](https://gulpjs.com/) v5.4.2
* [jQuery](https://jquery.com/) v3.2.1


## EditorConfig

EditorConfigを導入してチームでのエディタ設定（スペース・タブ・文字コード・改行コード）を揃えることをおすすめします。各エディタのプラグインは以下よりダウンロードします。

* [EditorConfig](http://editorconfig.org/#download)

## Node.jsのインストール

* [Node.js](https://nodejs.org/ja/)

### Node.jsの複数バージョン管理を行う場合

* [nodenv](https://github.com/nodenv/nodenv)
* [nodebrew](https://github.com/hokaccha/nodebrew)

## Usage

##インストール

「UINOTE」のファイルを一式クローンまたはダンロードし、プロジェクトのルートディレクトリに移動したら、以下のコマンドを実行して必要なモジュールをインストールします。

```bash
npm install
```

### ファイル監視の実行

ファイル監視の実行は以下のコマンドを実行します。

```bash
	npx gulp
```

以下のタスクを実行します。

* ローカルサーバーの起動
* Sass(SCSS)ファイル監視・結合・コンパイル・圧縮
* javascriptファイル監視・結合・圧縮

* イメージファイルの最適化(単独タスク)

```bash
	npx gulp imagemin
```

## File

```text
├── _src
│   ├── project //プロジェクトファイル（※）
│   │   ├── images //プロジェクト画像ファイル（※）
│   │   │   ├── jpg
│   │   │   │   └── danbo.jpg
│   │   │   └── png
│   │   │       └── logo.png
│   │   ├── scripts　//プロジェクトjsファイル（※）
│   │   │   ├── _partial01.js
│   │   │   ├── _partial02.js
│   │   │   └── _partial03.js
│   │   └── styles　//プロジェクトSass(SCSS)ファイル（※）
│   │       ├── foundation
│   │       │   ├── _config.scss
│   │       │   ├── _global.scss
│   │       │   ├── _mixin.scss
│   │       │   ├── _reset.scss
│   │       │   └── _variable.scss
│   │       ├── object
│   │       │   ├── component
│   │       │   │   ├── _button.scss
│   │       │   │   ├── _color.scss
│   │       │   │   ├── _forms.scss
│   │       │   │   ├── _grid.scss
│   │       │   │   ├── _table.scss
│   │       │   │   └── _typography.scss
│   │       │   ├── project
│   │       │   └── utility
│   │       │       ├── _fixedwidth.scss
│   │       │       ├── _margin.scss
│   │       │       ├── _print.scss
│   │       │       ├── _text.scss
│   │       │       ├── _vertical.scss
│   │       │       ├── _visibility.scss
│   │       │       ├── _whitespace.scss
│   │       │       └── _width.scss
│   │       ├── project-app.scss
│   │       └── structure
│   │           ├── _footer.scss
│   │           ├── _globalnav.scss
│   │           └── _header.scss
│   └── uinote // UINOTE用（編集不要）
│       ├── extend
│       │   ├── basic
│       │   │   ├── colors.html
│       │   │   ├── example.html
│       │   │   └── typography.html
│       │   ├── components
│       │   │   ├── button.html
│       │   │   ├── forms.html
│       │   │   └── grid.html
│       │   ├── include
│       │   │   ├── _footer.html
│       │   │   ├── _glovalnav.html
│       │   │   ├── _header.html
│       │   │   └── timestamp
│       │   │       ├── _project_scripts.html
│       │   │       ├── _project_styles.html
│       │   │       ├── _uinote_scripts.html
│       │   │       └── _uinote_styles.html
│       │   ├── index.html
│       │   └── utilities
│       │       └── index.html
│       ├── scripts
│       │   ├── _anchorLink.js
│       │   ├── _backtoTop.js
│       │   ├── _globalMenu.js
│       │   ├── _moduleDisplay.js
│       │   └── _nullLink.js
│       ├── styles
│       │   ├── foundation
│       │   │   ├── _config.scss
│       │   │   ├── _global.scss
│       │   │   ├── _mixin.scss
│       │   │   └── _variable.scss
│       │   ├── object
│       │   │   ├── component
│       │   │   │   ├── _anchor.scss
│       │   │   │   ├── _code.scss
│       │   │   │   ├── _grid.scss
│       │   │   │   ├── _icons.scss
│       │   │   │   ├── _module.scss
│       │   │   │   ├── _pageheader.scss
│       │   │   │   └── _pagetop.scss
│       │   │   ├── project
│       │   │   │   ├── _colorbox.scss
│       │   │   │   └── _intro.scss
│       │   │   └── utilitie
│       │   ├── structure
│       │   │   ├── _footer.scss
│       │   │   ├── _globalnav.scss
│       │   │   ├── _header.scss
│       │   │   └── _layout.scss
│       │   └── uinote.scss
│       └── template
│           ├── _project_scripts.html
│           ├── _project_styles.html
│           ├── _uinote_scripts.html
│           └── _uinote_styles.html
├── docs // 出力先フォルダー（編集不要）
│   ├── assets
│   │   ├── sample
│   │   │   ├── css
│   │   │   │   └── sample.app.min.css
│   │   │   ├── images
│   │   │   │   ├── jpg
│   │   │   │   │   └── danbo.jpg
│   │   │   │   └── png
│   │   │   │       └── logo.png
│   │   │   └── js
│   │   │       └── sample.app.min.js
│   │   └── uinote
│   │       ├── css
│   │       │   └── uinote.min.css
│   │       ├── images
│   │       │   └── uinote_logo.svg
│   │       └── js
│   │           └── uinote.min.js
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
├── .editorconfig
├── gulpfile.js
├── package-lock.json
├── package.json
```
（※）＝　編集ファイル

## License
MIT © [ysakmyg](https://github.com/ysakmyg)

