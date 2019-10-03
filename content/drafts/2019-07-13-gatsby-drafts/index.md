---
templateKey: "blog-post"
title: "Gatsby＋Netlifyのブログに下書き機能を追加したい"
date: 2019-07-13T15:04:10.000Z
featuredpost: false
featuredimage: ./featuredimage.png
description: Gatsby製のブログで、記事を下書き保存し、デベロップメント環境では表示、プロダクション環境では非表示にしたい

tags:
  - JavaScript
  - React
  - GatsbyJS
  - Tips
---

このブログを React 製の静的サイトジェネレータ [Gatsby](https://www.gatsbyjs.org/) と [Netlify](https://www.netlify.com/) で作り始めたんですが、 [Gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) には記事の下書き機能が無かったので、追加する方法を探しました。

---

## やりたいこと 🤔

- 記事を「公開」と「下書き」に分けたい
- GitHub に push し、Netlify でデプロイしてブログを公開したい
- 「下書き」記事を、デベロップメント環境では表示、プロダクション環境は非表示にしたい

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

## 1. Gatsby-starter-blog をベースにプロジェクトを作成 🚀

[Gatsby](https://www.gatsbyjs.org/) 公式が作っているブログ用テンプレート [Gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) をベースにプロジェクトを作成していきます。

```
gatsby new my-blog https://github.com/gatsbyjs/gatsby-starter-blog
```

---

## 2. draft フォルダを追加

[Gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) には、サンプルのブログ記事が 3 つ入っています。

- hello-world
- my-second-post
- new-beginnings

今回はこの内、「hello-world」と「new-beginnings」を公開し、「my-second-post」を下書き保存した状態にします。

まずは、 `content` フォルダ内に `draft` フォルダを追加します。  
そして `blog` フォルダ内の「my-second-post」をフォルダごとまるっと `drafts` フォルダに移動します。

📁 ファイル構成はこんな感じ。

```json{6-7}
my-app/
  ├── content/
  │   ├── blog/                 <= 公開
  │   │   ├── hello-world/
  │   │   └── new-beginnings/
  │   └── drafts/               <= 下書き（追加）
  │       └── my-second-post/
  ├── src/
  └── gatsby-config.js
```

---

## 3. gatsby-config.js に分岐を追加

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

---

## Netlify CMS を使う

下書き機能を追加する別の方法として、 [Netlify CMS](https://www.netlifycms.org/) を利用するという手もあります。  
ただ、使ってみたところ、記事を書いている途中でセッションが切れて記事データが消えたり 😢、マークダウンの方が手早く書けるというのもあり、個人的にこの CMS は使わないなーという感じです。
