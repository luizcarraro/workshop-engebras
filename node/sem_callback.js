function soma(x, y, callback) {
  var z;
  setTimeout( () => {
    z = x + y;
    callback(z);
  }, 500);
}

var imprimeResultado = function (resultado) {
  console.log('Resultado: ', resultado);
}

soma(2,3, imprimeResultado);

console.log('FIM');
