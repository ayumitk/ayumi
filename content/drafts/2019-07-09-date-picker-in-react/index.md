---
templateKey: "blog-post"
title: "ReactアプリでAirbnb製のデートピッカーコンポーネントを使ってみた"
date: 2019-07-09T15:04:10.000Z
featuredpost: false
featuredimage: /img/react-image.png
description: デートピッカーのパッケージはいろいろあるけど、Airbnbのreact-datesを使ってみた。

tags:
  - React
  - MomentJS
  - Tips
---

ToDo アプリを作っていて、日にちを選べるカレンダーの UI が必要なため、どんなコンポーネントがあるのか検索してみたところ。

[react の date-picker を選ぶ](https://qiita.com/193/items/61b81ea718d70b6197e1)

GitHub のスター数や、必要な機能、見た目などをふまえて検討した結果、react-dates という Airbnb 製のコンポーネントを使うことにしました。

[react-dates](https://github.com/airbnb/react-dates)

---

## 誕生日リストを作ろう

Example Project として、誕生日リストを作ってみることにします。  
誕生日の日付だけ変更可能なアプリ。

### 出来上がりイメージ。

※画像を追加

### データのサンプルはこんな感じ

```json
[
  {
    "id": 1,
    "name": "Emma",
    "date": "2019-07-23T12:00:00-07:00"
  },
  {
    "id": 2,
    "name": "Jake",
    "date": "2019-07-30T12:00:00-07:00"
  }
]
```

### アプリの構造はこんな感じ

※画像を追加

### ファイル構成

Create-react-app から作っていきます。

```json{7-9}
bd-app/
  ├── README.md
  ├── node_modules/
  ├── package.json
  ├── public/
  └── src/
       ├── Components/
       │      └── BDlist.js  <= 追加
       │      └── BDrow.js   <= 追加
       ├── App.scss
       ├── App.js
       └── index.js
```

---

## パッケージをインストール

ドキュメントを読みながら、いざ「Getting Started！」と思ったら、何だこのコードは…？

```
(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs npm install --save "$PKG"
)
```

MomentJS や React 本体のバージョンをチェックして、正しいバージョンの react-dates をインストールしてくれるスクリプト。
括弧ごとコピペしてパワーシェルで実行したらいいみたい。

気になるようなら、いきなりインストールするんじゃなく、xargs 以下に echo をつけて吐き出させることができます。

```
(
  export PKG=react-dates;
  npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs echo npm install --save "$PKG"
)
```

で、表示されたコードがこんな感じ。

```
npm install --save react-dates moment@>=#.## react@>=#.## react-dom@>=#.##
パッケージバージョンが指定されたnpmインストールスクリプト
```

※Windows のパワーシェルだとエラー…。

---

## 必要なコンポーネントをインポート

今回は Airbnb で使っているような日付の範囲ではなく、単にカレンダーから 1 日だけを取得したかったので、SingleDatePicker をインポート。

```
import 'react-dates/initialize';
import { SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
```

---

## state を作る

Row の方に state を作る。

```javascript
state = {
  date: null
};
```

---

## SingleDatePicker コンポーネント設置

```javascript
<SingleDatePicker
  date={this.state.date} // momentPropTypes.momentObj or null
  onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
  focused={this.state.focused} // PropTypes.bool
  onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
  id="your_unique_id" // PropTypes.string.isRequired,
/>
```

カレンダーは 1 つでいいので、オプション追加。
日付のフォーマットも変えれます。 `ll` にした。

---

## MomentJS

デベロッパーツールを見てもらうと分かるんですが、取得できる日付データは momentJS 仕様。
このままだと Firebase に登録できなかったので、フォーマットしなおします。

```javascript
date.format();
```

もちろん、SingleDatePicker にデータを送るときは、momentJS でフォーマットしなおす必要あり。

```javascript
import moment from "moment";

moment(date);
```

[カレンダー UI を実装する React component](http://yuw27b.hatenablog.com/entry/2018/10/04/231748)
