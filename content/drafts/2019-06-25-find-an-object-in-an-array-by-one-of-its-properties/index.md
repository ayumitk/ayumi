---
templateKey: "blog-post"
title: "JavaScriptで配列の中から、特定の要素を持つオブジェクトを探す"
date: 2019-06-25T15:04:10.000Z
featuredpost: false
featuredimage: /img/js-image.png
description: 配列の中から何かを探し出す時のメソッドまとめ。

tags:
  - JavaScript
  - Array
  - Tips
---

React を使ってアプリケーションを作るようになって、配列(Array)を操作することが増えてきました。  
これを機に、配列の中から特定の要素を持つオブジェクトを探す時のメソッドをまとめておきます。

※サンプルコードは全て ES2015 のアロー関数(Arrow Function)を使っています。

---

## find() 条件に合う最初のオブジェクトを 1 つ探す時

条件に合う _最初のオブジェクトが 1 つ_ だけ返る。  
無ければ `undefined` が返る。

[Array.prototype.find() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
const users = [
  { name: "Emma", age: 20 },
  { name: "Jake", age: 30 },
  { name: "Lily", age: 40 },
  { name: "Harry", age: 20 }
];

const targetUser = users.find(friend => friend.age === 20);
console.log(targetUser);

// => { name: 'Emma', age: 20 },
// Emma だけが返る、Harry は返らない。
```

---

## filter() 条件に合うオブジェクト全てを探す時

条件に合うオブジェクト _全て_ が配列で返る。  
見つからなかったら空の配列。

[Array.prototype.filter() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const users = [
  { name: "Emma", age: 20 },
  { name: "Jake", age: 30 },
  { name: "Lily", age: 40 },
  { name: "Harry", age: 20 }
];

const targetUser = users.filter(friend => friend.age === 20);
console.log(targetUser);

// [
//  { name: 'Emma',  age: 20 },
//  { name: 'Harry', age: 20 }
// ]
// Emma も Olivia も返る。
```

---

## findIndex() 条件に合うオブジェクトのインデックスを知りたい時

条件に合う _最初のオブジェクトのインデックス_ だけが返る。  
見つからなかったら `-1` が返る。

[Array.prototype.findIndex() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```javascript
const users = [
  { name: "Emma", age: 20 },
  { name: "Jake", age: 30 },
  { name: "Lily", age: 40 },
  { name: "Harry", age: 20 }
];

const index = users.findIndex(friend => friend.age === age);
console.log(index);

// => 0
// Emma の index 0 だけが返る。Harry の index は返らない。
```

---

## some() 条件に合うオブジェクトがあるかないかだけ知りたい時

条件に合うオブジェクトが 1 つでもあれば、 `true` 、無ければ `false` が返る。

[Array.prototype.some() – JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```javascript
const users = [
  { name: "Emma", age: 20 },
  { name: "Jake", age: 30 },
  { name: "Lily", age: 40 },
  { name: "Harry", age: 20 }
];

const existing = users.some(friend => friend.age === 20);

console.log(existing);

// => true
```
