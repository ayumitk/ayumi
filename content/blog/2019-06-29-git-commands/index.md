---
templateKey: "blog-post"
title: "よく使うGitコマンド"
date: 2019-06-29T15:04:10.000Z
featuredpost: false
featuredimage: ./featuredimage.png
description: よく使うのに忘れがちなGitコマンドまとめ

tags:
  - Git
  - Tips
---

## ローカルブランチをマージ

例えば develop ブランチで作業していて、master ブランチにマージしたい時。  
まずはマージしたいブランチ(master)へ移動。

```
$ git checkout master
```

マージする。

```
$ git merge develop
```

---

## ローカルブランチを削除する

### マージ済みのローカルブランチを削除

```
$ git branch --delete [ローカルブランチ名]
$ git branch -d [ローカルブランチ名]
# どちらも同じ
```

マージされていないローカルブランチを削除しようとするとエラーがでる。  
（error: Cannot delete the branch 'ローカルブランチ名' which you are currently on）

### どんなローカルブランチでも削除

```
$ git branch -D [ローカルブランチ名]
```

どんなローカルブランチでも削除できる。

---

## トラッキングするリモートブランチを指定して push

ローカルブランチがどのリモートブランチをトラッキングしているか確認。

```
$ git branch -vv
```

Push と同時に、上流ブランチに設定する。

```
$ git push -u origin [ブランチ名]
$ git push --set-upstream origin [ブランチ名]
# どちらも同じ
```

---

## ローカルの変更を破棄したい

特定のファイルの編集内容を取り消したい(add する前)

```
$ git checkout <filename>
```

全てのファイル。

```
$ git checkout .
```

新規追加したファイルは削除されないので、別途削除する必要がある。

```
$ git clean -df .
```

---

## 他ブランチの特定のコミットだけを取り込む

対象のコミット履歴を持っているブランチで、ログを確認。

```
$ git log
```

コミットを取り込みたいブランチに移動し、コミット ID を指定する。

```
$ git cherry-pick XXXXXXXXXXXXXXXXXXXXXXXX
```

---

## リモートから特定のブランチを pull したい

リモートブランチをローカルに checkout する。

```
$ git checkout -b <ローカルブランチ名> origin/<リモートブランチ名>
```

---

## ステージングを取り消したい

誤って add したファイルを取り消したい時。

```
$ git reset <ファイル名>
```

ステージングを取り消すだけで、編集内容は残る。  
ファイル名を指定しないと全てのステージングが取り下げられるので注意。

---

## push してしまったコミットコメントを修正して push しなおす

typo して push してしまったコミットコメントを修正して再 push したい時。

```
$ git commit --amend -m "New commit message"
```

そのまま再 push はできないので、強制的にリモートのコミットを書き換える。  
※チームで共有しているブランチで、この作業はしない方がいい。

```
$ git push -f [repository] [branch]
```

```
$ git push -f origin <ブランチ名>
```

---

## 特定のコミットまで戻したい

戻したいコミットのハッシュ値を調べる。

```
$ git log
commit ************************
```

```
$ git reset --hard ************************
```

---

## マージしたけどやっぱりやめたい時

マージしたらコンフリクトした 😱 から、一旦止めて元に戻したい時。

### コンフリクトの編集をしていない場合

```
$ git merge --abort
```

### コンフリクトの編集をした場合

コンフリクト解消のために既にコードを編集したけど、やっぱりマージを止めて元に戻したい時。

```
$ git reset --hard HEAD
```

---

## git pull を取り消したい時

### マージ成功した場合

まずは HEAD の移動履歴を確認する。

```
$ git reflog
```

出力：

```
ba7a7cf (HEAD -> master, origin/master) HEAD@{0}: commit: Add post
364a066 HEAD@{1}: commit: Add blog post page style
345029b HEAD@{2}: pull: Merge made by the 'recursive' strategy.
6709beb HEAD@{3}: pull: Fast-forward
ed7a97f HEAD@{4}: checkout: moving from master to master
...
```

戻りたいところが `HEAD@{1}` だとすると、

```
$ git reset --hard HEAD@{1}
```

強制的に HEAD を移動します。

### マージが失敗（コンフリクト）した場合

```
$ git merge --abort
```
