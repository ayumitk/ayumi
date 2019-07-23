---
templateKey: "blog-post"
title: "【React】ReactアプリでCSSをあてる方法4つ＋おまけ"
date: 2019-07-01T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: ReactアプリでCSSをあてる方法4つ

tags:
  - JavaScript
  - React
  - CSS
  - Tips
---

スタイリングの方法はいろいろ。  
それぞれに長所と短所があるので、全部試してみて、好みやプロジェクトによって使い分けたらいいと思う。

---

## 1. CSS Stylesheet or SCSS

従来の方法ですね。  
スタイルシートを読み込んで、クラス名をあてて、スタイリングしていく方法。
SCSS も直接読めて便利。  
学習中の人はとりあえずこらからスタートしたらいいかと。

---

## 2. Inline styling

```javascript
import React from "react";

const divStyle = {
  margin: "40px",
  border: "5px solid pink"
};
const pStyle = {
  fontSize: "15px",
  textAlign: "center"
};

const Box = () => (
  <div style={divStyle}>
    <p style={pStyle}>Get started with inline style</p>
  </div>
);

export default Box;
```

キーがキャメルケース（camelCased）なのに注意。

---

## 3. CSS Modules

スタイルシートとして読み込む。  
全てのクラス名がデフォルトでスコープされている。

```javascript
import React from "react";
import styles from "./DashedBox.css";

const DashedBox = () => (
  <div className={styles.container}>
    <p className={styles.content}>Get started with CSS Modules style</p>
  </div>
);

export default DashedBox;
```

create-react-app を使っている場合、webpack のおかげで。

---

## 4. CSS in JS

CSS をコンポーネントレベルで使う。  
下記に人気の CSS in JS ライブラリを載せておきます。

> _参考:_
>
> - [9 CSS in JS Libraries you should Know in 2019](https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b)

### Styled Components

コンポーネントとしてスタイルを書けるようになるライブラリ。  
非常に CSS っぽく書ける上に、もちろん js の変数なども使えるので効率よく書けます。

Visual Studio Code 用のシンタックスをハイライトしてくれるプラグインあるので、ぜひ使いましょう。

Styled-Components を使った UI ライブラリはたくさんあるので、好みのものを使うと手早くそれっぽく作れる。

> _参考:_
>
> - [9 React Styled-Components UI Libraries for 2019](https://blog.bitsrc.io/9-react-styled-components-ui-libraries-for-2018-4e1a0bd3e179)

### Emotion

Gatsby 公式チュートリアルにも採用してある。  
後発なのでいいとこどりしてる感がありますね。

---

## まとめ

いろいろと議論がなされてるトピックなんですけど、プロジェクトによって選びたいところ。

- React 学習中ならとりあえず従来の CSS Stylesheet

> _参考:_
>
> - [5 Ways to Style React Components in 2019](https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b)
> - [Four ways to style react components](https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822)
