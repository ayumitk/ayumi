---
templateKey: "blog-post"
title: "【JS】連想配列(Dictionary)に要素を追加・削除する"
date: 2019-07-05T15:04:10.000Z
featuredpost: false
featuredimage: /img/js-image.png
description: 連想配列に要素を追加・削除する時。

tags:
  - JavaScript
  - Dictionary
  - Tips
---

## 連想配列とは

```
var user = {id: 1, name: 'Ayumi', Citizenship: 'Japan'};
```

キーがある配列ですね。

---

## 連想配列の要素の追加

```
var user = {};  // 初期化

user.id = 1;
user.name = 'Ayumi';
// or
user['id'] = 1;
user['name'] = 'Ayumi';

console.log(user);

// => {id:1, name:'Ayumi'}
```

---

## 連想配列の要素の削除

要素を削除する時は delete 演算子を使います。

```
var user = {id:1, name:'Ayumi'};

delete user['name'];

console.log(user);

// => {id:1}
```

[JavaScript の連想配列に要素を追加・削除する方法](https://uxmilk.jp/12852)
