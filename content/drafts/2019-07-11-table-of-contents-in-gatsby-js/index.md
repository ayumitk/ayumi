---
templateKey: "blog-post"
title: "Gatsby製のブログに目次を追加する"
date: 2019-07-11T15:04:10.000Z
featuredpost: false
featuredimage: /img/gatsby-image.png
description: プラグインなしで簡単に追加できます

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

GatsbyJS には実際にブログとして運用するために必要な機能がほとんどありません。  
そのうちの一つ、目次の追加。  
簡単に設定できました。

---

## 1. GraphQL を確認

GraphQL に最初からあった  
http://localhost:8000/___graphql

---

## 2. blog-post.js に追加

プロパティとして渡す。

---

## 3. TableOfContents.js を追加

components フォルダに TableOfContents.js を作る。

---

## 4. スタイリングする

あとは好きにスライリングしたら出来上がり。
