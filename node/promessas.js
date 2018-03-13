var Promise = require('bluebird');

var queries = [];

queries.push(query);

Promise.all(queries).then(function () {
  console.log('Executei todas')
})

function soma(x, y) {
  return new Promise(function (resolve, reject) {
    var z;
    setTimeout( () => {
      var k = 3 + 5;
    }, 500);
    setTimeout( () => {
      z = x + y;
      if(erro) {
        reject(new Error('Deu ruim'))
      } else {
        resolve(z);
      }
    }, 500);
  });
}

soma(2,3).then(function (result) {
  console.log('Resultado: ', result);
}).catch(function (err) {
  // Tratamento do erro
})

console.log('FIM');

// var result = soma(2,3);
// console.log('Resultado: ', result);
