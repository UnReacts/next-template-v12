# Next.js 開発のテンプレート

Next.js の開発はこのテンプレートをベースに行ってください。

## 環境

`package.json` を参照ください。

## 使用しているパッケージ

### [`tailwindcss`](https://tailwindcss.com/)

プロジェクトのスタイリングは Tailwind CSS を使用しています。`postcss` と `autoprefixer` も一緒に使用しています。

### [`next-head-seo`](https://github.com/catnose99/next-head-seo)

catnose さんが作成した SEO カスタマイズ系の軽量パッケージです。`Layout` コンポーネントで使用しています。

# テンプレートの使い方

テンプレートは以下の手順で使用してください。

## 1. `create-next-app` する

`create-next-app` の `--example` オプションを使ってテンプレートからプロジェクトを始めることができます。
以下のコマンドの `your-app-name` に自分の作りたいプロジェクト名を入れてコマンドを実行してください。

```shell
npx create-next-app your-app-name --example https://github.com/UnReacts/next-template-v12
```

## 2. README.md を書き換える

プロジェクトの内容にあわせて、`README.md`を書き換えます。
1 番下に `README.md` の参考を載せています。

## 3. プッシュする

`README.md`を書き換えたら、プロジェクトリポジトリにプッシュします。
あらかじめからのリポジトリを作成しておきます。

```shell
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <リポジトリのURL>
git push -u origin main
```

# ディレクトリ構成について

今回は、すべてのファイルを `src` に入れています。
コンポーネントのディレクトリは機能ベースで切る方針をとっています。

```js
.
├── .next
├── public // 画像ファイルを格納する
├── src
│   ├── components // コンポーネントは機能ベースでディレクトリを切る
│   │   ├── common // 複数の機能にまたがって使用するコンポーネント
│   │   │   ├── parts // さらにコンポーネントの中で使い回せるものはpartsに切り出す
│   │   │   │   ├── Button.tsx
│   │   │   │   └── ...
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   └── ...
│   │   ├── form // 例: フォームの機能で使用するコンポーネント
│   │   └── ...
│   ├── hooks // カスタムフックを配置する
│   ├── lib // APIを叩く処理やClassでの型定義ファイルを配置する
│   ├── pages // ページテンプレートを配置する
│   │   ├── api
│   │   │   └──hello.ts //デフォルトのやつ
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   └── styles
...
```

### `README.md` の参考

````md
# プロジェクトの概要

このプロジェクトは、~です。

## 使用しているパッケージ

### [`tailwindcss`](https://tailwindcss.com/)

プロジェクトのスタイリングは Tailwind CSS を使用しています。`postcss` と `autoprefixer` も一緒に使用しています。

### [`next-head-seo`](https://github.com/catnose99/next-head-seo)

catnose さんが作成した SEO カスタマイズ系の軽量パッケージです。`Layout` コンポーネントで使用しています。

# 開発に参加するまでの流れ

以下の手順を踏んで開発に参加しましょう。

## 1. `git clone`

以下のコマンドを実行してクローンします。

```shell
git clone <リポジトリの URL>
```

## 2. `npm install`

`npm install`を行います。`npm`のバージョンは Volta で固定していますが、Volta を使っていない人は、`npm -v`で 8 系かどうかを確かめます。

```shell
#npmのバージョンを確認（8系でない場合は、8系をインストール）
npm -v

#パッケージをインストール
npm install
```

## 3. `npm run dev`

`npm run dev`でローカルサーバーを立ち上げます。

```shell
npm run dev
```
````
