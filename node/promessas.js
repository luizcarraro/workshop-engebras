var Promise = require('bluebird');

function soma(x, y) {
  return new Promise(function (resolve) {
    var z;
    setTimeout( () => {
      z = x + y;
      resolve(z);
    }, 500);
  });
}

soma(2,3).then(function (result) {
  console.log('Resultado: ', result);
});

console.log('FIM');

// var result = soma(2,3);
// console.log('Resultado: ', result);
