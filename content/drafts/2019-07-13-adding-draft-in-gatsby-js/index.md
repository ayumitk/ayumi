---
templateKey: "blog-post"
title: "Gatsby＋Netlifyのブログ記事を下書き保存したい"
date: 2019-07-13T15:04:10.000Z
featuredpost: false
featuredimage: /img/gatsby-image.png
description: Gatsby製のブログ記事を下書き保存して、プロダクション環境でのみ非表示にしたい場合。

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

## やりたいこと

- GitHub に push し、Netlify でデプロイしている Gatsby 製ブログ
- 記事を「公開」と「下書き」に分ける
- プロダクション環境でのみ「下書き」を非表示にしたい

こんな感じのイメージ。

上記を踏まえて、どういった方法があるのか探してみたところ、すごくシンプルな方法がありました。

> _参考:_
>
> - [Writing Drafts in GatsbyJS](https://chaseonsoftware.com/gatsby-drafts/)

| Stage                  | content/blog         | content/drafts       |
| ---------------------- | -------------------- | -------------------- |
| Local Development      | ✅ (symlink)         | ✅ (symlink)         |
| Non-Production Netlify | ✅ (pulled at build) | ✅ (pulled at build) |
| Production Netlify     | ✅ (pulled at build) | ❌                   |

プロダクションブランチ(master)では、draft の記事は表示されない。  
ローカルホストと、プロダクションブランチ(master)以外のブランチ(develop)では、表示される。

---

## 1. Gatsby-starter-blog から

Gatsby-starter-blog をベースにプロジェクトを作成。

---

## 2. draft フォルダを追加

draft フォルダを content フォルダ内に追加。  
最初から入っている記事「Second」を、drafts フォルダに移動。

ファイル構成はこんな感じ。

```json{3-4}
my-app/
  ├── content/
  │   ├── blog/  <= 公開（もともとある）
  │   └── drafts/ <= 下書き（追加する）
  ├── src/
  └── gatsby-config.js
```

---

## 3. gatsby-config.js に分岐を書き込む

`module.exports` を Gatsby Config オブジェクトにする。

```javascript
const cfg = {
  /* ...my default configuration */
};
module.exports = cfg;
```

環境によって分岐し、追加する。

```javascript
if (process.env.CONTEXT !== "production") {
  const draftsCfg = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/src/drafts`
    }
  };
  cfg.plugins.push(draftsCfg);
}
```

たったこれだけで完成！

ローカルで gatsby develop を実行してみる。  
localhost

Netlify で master ブランチをデプロイしてみよう。  
https://gatsby-draft.netlify.com/

さらに、develop ブランチも作成して、Netlify でデプロイしてみよう。  
https://develop--gatsby-draft.netlify.com/

[GitHub からダウンロード](https://github.com/ayumitk/gatsby-drafts)
