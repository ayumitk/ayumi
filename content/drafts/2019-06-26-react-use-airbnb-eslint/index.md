---
templateKey: "blog-post"
title: "Create-react-appでAirbnbのESLintを使う"
date: 2019-06-26T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: Create-react-app でReactアプリケーションを作る時に、AirbnbのESlintも入れたい時。

tags:
  - JavaScript
  - React
  - ESlint
  - Tips
---

## 1. create-react-app で新しいプロジェクトを作る

まずは、ターミナルから [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) で新しいプロジェクトを作ります。

```text:title=Terminal
npx create-react-app my-app
```

※ `my-app` 部分はお好きなプロジェクト名に変更してください。  
※ Node >= 8.10 及び npm >= 5.6 の環境が必要です。  
※ 一番最初の [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) は npm 5.2 から利用できるパッケージランナーツールです。

そして、作成したプロジェクトフォルダに移動します。

```text:title=Terminal
cd my-app
```

---

## 2. Airbnb の Eslint 関連パッケージをインストール

ターミナルから `devDependencies` に Airbnb の Eslint 関連パッケージをインストールします。

```text:title=Terminal
npm i -D eslint-config-airbnb eslint-plugin-import eslint-plugin-react
```

インストール後、 `package.json` 内に下記の 3 つのパッケージが追加されているのが確認できます。

```json:title=package.json
{
  "devDependencies": {
    "eslint-config-airbnb": "^17.1.0",
    "eslint-plugin-import": "^2.17.3",
    "eslint-plugin-react": "^7.13.0"
  }
}
```

> _参考:_  
> [eslint-config-airbnb - GitHub](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

---

## 3. .eslintrc ファイルを作成

`.eslintrc` ファイルを、プロジェクトのルートフォルダ直下に作り、下記を追加します。

```json:title=.eslintrc
{
  "extends": ["react-app", "airbnb"],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  }
}
```

ESLint のルールは自分に合わせて追加していきましょう。

> _参考:_  
> [wesbos/dotfiles: Hey wes what settings do you use? - GitHub](https://github.com/wesbos/dotfiles/blob/master/.eslintrc)

---

## 4. .eslintignore ファイルを作成

`.eslintignore` ファイルを、プロジェクトのルートフォルダ直下に作り、下記を追加します。

```json:title=.eslintignore
src / serviceWorker.js
```

これで完成!

私は [Visual Studio Code](https://code.visualstudio.com/) というエディタを使っているので、[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) エクステンションもインストールして使用しています。  
ルールに沿わないコードには赤い波線が付き、 常に PROBLEMS タブでに怒られつつ、保存時に自動で Lint してくれるように設定しているので、非常に助かります。

---

※最終的なプロジェクトのファイル構成

```json{2-3}
my-app/
  ├── .eslintignore  <= 追加
  ├── .eslintrc      <= 追加
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── public/
  │   ├── index.html
  │   └── favicon.ico
  └── src/
      ├── App.css
      ├── App.js
      ├── App.test.js
      ├── index.css
      ├── index.js
      └── logo.svg
```
