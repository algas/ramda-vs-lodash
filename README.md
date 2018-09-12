# Ramda.js vs Lodash.js

[Lodash.js](https://lodash.com/) と比べて [Ramda.js](https://ramdajs.com/) の使い勝手がいいところを紹介する。

## 大きな違い

- 純粋関数型に近いスタイル  
非破壊で副作用がおきないように設計されている
- デフォルトで関数が curry 化されている
- 関数の引数が curry 化しやすいようにアレンジされている

## 具体例

### map

lodash は入力の型によらず出力が array になってしまう。  
ramda は object を入力すると object が返ってくる。

```.js
const R = require('ramda');
const _ = require('lodash');
// これ以降のコードでは上記の require は省略する

const obj = {a: 2, b: 3};
// ramda
R.map(x => x + 2, obj); //=> {a: 4, b: 5}
// lodash
_.map(obj, x => x + 2); //=> [4, 5]
```

### 関数合成

lodash では合成関数を作りづらい。

```.js
const xs = [7,2,3,6];
// ramda
R.compose(R.sum, R.filter(t => t % 2 == 0), R.map(x => x + 1))(xs); //=> 12
// R.map(x => x + 1) は R.map(R.add(1)) とも書ける
// lodash
_.chain(xs).map(x => x + 1).filter(t =>  t % 2 == 0).sum().value(); //=> 12
```

### lens

プロパティを使える。lodash で同様の機能を実現するのは大変。

```.js
let xLens = R.lens(R.prop('x'), R.assoc('x')); // get-function: prop, set-function: assoc
R.view(xLens, {x: 1, y: 2}); // get x => 1
R.set(xLens, 4, {x: 1, y: 2}); // set 4 x => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}); // map negate x => {x: -1, y: 2}
```

## 感想など

- lodash-fp の方は ramda と同様の機能があるので、 lodash から緩やかに移行する場合にはそちらを使ってもいいかも。
