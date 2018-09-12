const R = require('ramda');

let main = () => {
  console.log('map');
  console.log(R.map(x => x * 2, {a:3, b:5}));
  console.log(R.map(R.multiply(2), {a:3, b:5}));
  console.log(R.compose(R.sum, R.filter(t => t % 2 == 0), R.map(x => x + 1))([7,2,3,6]));
  console.log(R.map(R.add(1))([2]));
};

main();
