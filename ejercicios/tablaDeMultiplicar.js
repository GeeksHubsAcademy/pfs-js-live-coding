function tablaDeMultiplicarConWhile(n) {
  console.log('tablaDeMultiplicarConWhile');
  var index = 1;
  while (index <= 10) {
    console.log(n + ' * ' + index + ' = ', index * n);
    index++;
  }
}

tablaDeMultiplicarConWhile(2);

// do while
// for
// for of
// for in
function tablaDeMultiplicarForIn(n) {
  console.log('tablaDeMultiplicarForIn');

  // var objeto = {
  //   1: true,
  //   2: true,
  //   3: true,
  //   4: true,
  //   5: true,
  //   6: true,
  //   7: true,
  //   8: true,
  //   9: true,
  //   10: true,
  // };
  var objeto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (var key in objeto) {
    // var index = key;
    var index = objecto[key];

    console.log(n, '*', index, '=', n * index);
  }
}
tablaDeMultiplicarForIn(2);
