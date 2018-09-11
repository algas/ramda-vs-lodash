# Ramda.js vs Lodash.js

Lodash.js と比べて Ramda.js の使い勝手がいいところを紹介する。

## 大きな違い

- 純粋関数型に近いスタイル
- デフォルトで関数が curry 化されている
- curry 化しやすいようにアレンジされている

## 関数比較

基本定義は以下のとおり

```.js
const R = require('ramda');
const _ = require('lodash');
```

- ramda@0.25.0
- lodash@4.17.10

### map

lodash は入力の型によらず出力が array になってしまう。
ramda は object を入力すると object が変える。

```.js

```
