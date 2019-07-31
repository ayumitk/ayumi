---
templateKey: "blog-post"
title: "Gatsby＋Netlifyのブログ記事を下書き保存したい"
date: 2019-07-13T15:04:10.000Z
featuredpost: false
featuredimage: /images/gatsby-image.svg
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

| Stage                  | content/blog | content/drafts |
| ---------------------- | ------------ | -------------- |
| Local Development      | ✅           | ✅             |
| Non-Production Netlify | ✅           | ✅             |
| Production Netlify     | ✅           | ❌             |

上記を踏まえて、どういった方法があるのか探してみたところ、すごくシンプルな方法がありました。

> 参考 :
> [Writing Drafts in GatsbyJS](https://chaseonsoftware.com/gatsby-drafts/)

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
}
module.exports = cfg
```

環境によって分岐し、追加する。

```javascript
if (process.env.CONTEXT !== "production") {
  const draftsCfg = {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `drafts`,
      path: `${__dirname}/src/drafts`,
    },
  }
  cfg.plugins.push(draftsCfg)
}
```

たったこれだけで完成 🙌

---

## 動作確認

### ローカル環境(Local Development)

まずは、`gatsby develop` を実行し、ローカルサーバで確認してみよう。  
http://localhost:8000/

記事が３つとも確認できますね。

### Netlify の本番環境(Production Netlify)

続いて、`master` ブランチを GitHub に `push` し、Netlify でデプロイしてみよう。

DEMO : https://gatsby-draft.netlify.com/

記事が二つだけ！

### Netlify の開発環境(Non-Production Netlify)

さらに、`master`ブランチをコピーして`develop` ブランチを作成し、Netlify でブランチデプロイしてみよう。

DEMO : https://develop--gatsby-draft.netlify.com/

こちらも記事が３つとも確認できます。

デモのソースは GitHub から確認できますよ 👍

<a href="https://github.com/ayumitk/gatsby-drafts" target="_blank" class="btn">GitHub からダウンロード</a>
