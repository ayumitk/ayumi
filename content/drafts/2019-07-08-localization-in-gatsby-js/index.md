---
templateKey: "blog-post"
title: "【GatsbyJS】日英切替機能を作る"
date: 2019-07-08T15:04:10.000Z
featuredpost: false
featuredimage: /img/gatsby-image.png
description: 日英切替機能を作る

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

gatsby-plugin-intl を使ってみた。

出来たけど、このままじゃ実際のプロジェクトで使えそうにない。  
というのも、言語ファイルを 1 つの json ファイルで管理してるんですよね。  
ページ数の少ない Web サイトだったらいいけど、大規模サイトじゃ無理無理。

で、プラグインの作者が言ってるんだけど、今のところファイルを分ける機能は搭載されてない。  
ただ、ファイルを分けるスクリプトを自分で書いたらいいよーって。

i18n frameworks の方でも作ってみよう。

- [Localization and Internationalization with Gatsby (i18n) - GatsbyJS](https://www.gatsbyjs.org/docs/localization-i18n/)
- [Add an official guide for internationalizing websites with Gatsby ](https://github.com/gatsbyjs/gatsby/issues/3853)
- [gatsby-plugin-intl](https://github.com/wiziple/gatsby-plugin-intl)

それにしても、フロントエンドメインで仕事するようになって、こういうディスカッションを追うのが楽しくなってきたなぁ。
