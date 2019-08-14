---
templateKey: "blog-post"
title: "Gatsbyブログにアイキャッチ画像を追加"
date: 2019-08-09T15:04:10.000Z
featuredpost: false
featuredimage: ./featuredimage.png
description: 忘れないようにまとめ

tags:
  - JavaScript
  - Gatsby
  - Tips
---

[Working With Images in Markdown Posts and Pages](https://www.gatsbyjs.org/docs/working-with-images-in-markdown/)

※注意しないといけないのは、 `gatsby-image` は svg 画像をサポートしていません。そのせいで、 `childImageSharp` が `null` になってしまい、解決するのに小一時間悩んでしまいました。
