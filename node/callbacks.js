function soma(x, y, callback) {
  var z;
  setTimeout( () => {
    z = x + y;
    callback(null, z);
  }, 500);
  return z;
}

soma(2,3, function (err, result) {
  console.log('Resultado: ', result);
});

console.log('FIM');

// var result = soma(2,3);
// console.log('Resultado: ', result);
