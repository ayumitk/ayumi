---
templateKey: "blog-post"
title: "【React】if分岐"
date: 2019-07-12T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: Reactアプリ内で if または Conditional Operator で分岐させたい時に、いつも混乱するのでまとめ

tags:
  - React
  - JSX
  - Javascript
  - Tips
---

## JSX 内で直接 if 文は使えない

JSX は { } 内で JavaScript が実行できるんだと覚えていたんですが、実行できるのは式 ( expression ) だけで、if や for のような文は実行できません。

三項演算子は演算子なので JSX 内で使うことができます。  
ただ、個人的に複数行にわたる三項演算子は読みづらくなるので、あまり使いたくありません。

---

## コンポーネントにして関数を呼び出し、その関数内で if 文などを使う

Function Component を作り、その関数内では通常の JavaScript が使用できるから、そこで分岐など行う。

---

## 即時関数内で if 文を使う

可能だけどコンポーネントにする方が読みやすいと思う。

[React JSX の中で if で分岐させたい](https://chaika.hatenablog.com/entry/2019/05/16/083000)
[Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
