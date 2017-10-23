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
── _src
│   ├── project //開発ファイル軍
│   │   ├── images //画像ファイル（※）
│   │   │   ├── jpg
│   │   │   │   └── danbo.jpg
│   │   │   └── png
│   │   │       └── logo.png
│   │   ├── scripts　//jsファイル（※）
│   │   │   ├── _partial01.js
│   │   │   ├── _partial02.js
│   │   │   └── _partial03.js
│   │   └── styles　//Sass(SCSS)ファイル（※）
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
│           ├── project_scripts.html
│           ├── project_styles.html
│           ├── uinote_scripts.html
│           └── uinote_styles.html
├── gulpfile.js
├── htdocs
│   ├── assets
│   │   ├── include
│   │   │   ├── footer.html
│   │   │   ├── glovalnav.html // メニュー表示用HTML（※）
│   │   │   ├── header.html
│   │   │   ├── scripts.html
│   │   │   ├── styles.html
│   │   │   └── timestamp
│   │   │       ├── project_scripts.html
│   │   │       ├── project_styles.html
│   │   │       ├── uinote_scripts.html
│   │   │       └── uinote_styles.html
│   │   ├── sample
│   │   │   ├── css // 出力されたスタイルシート
│   │   │   │   └── sample.app.min.css
│   │   │   ├── images // 最適化されたイメージ
│   │   │   │   ├── jpg
│   │   │   │   │   └── danbo.jpg
│   │   │   │   └── png
│   │   │   │       └── logo.png
│   │   │   └── js // 出力されたjsファイル
│   │   │       └── sample.app.min.js
│   │   └── uinote // UINOTE用
│   │       ├── css
│   │       │   └── uinote.min.css
│   │       ├── images
│   │       │   └── uinote_logo.svg
│   │       └── js
│   │           └── uinote.min.js
│   ├── basic // メニュー表示用HTML
│   │   ├── colors.html // カラー関連サンプル（※）
│   │   ├── example.html // コンポーネント登録用サンプル（※）
│   │   └── typography.html // タイポグラフィスタイルサンプル（※）
│   ├── components
│   │   ├── button.html // ボタンスタイルサンプル（※）
│   │   ├── forms.html // フォームスタイルサンプル（※）
│   │   └── grid.html // グリッドシステムサンプル（※）
│   ├── index.html // overview(インデックス)ページサンプル（※）
│   └── utilities
│       └── index.html // 汎用クラスサンプル（※）
```
（※）＝　編集ファイル

## License
MIT © [ysakmyg](https://github.com/ysakmyg)

