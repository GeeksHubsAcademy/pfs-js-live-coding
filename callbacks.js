const factorialSync = (i) => {
  let int = BigInt(i);
  let total = 1n;
  while (int > 0) {
    total *= int;
    int--;
  }
  return total;
};

// console.time();
// console.log(factorialSync(1e5));
// console.timeEnd();

const factorialAsync = (i, callback) => {
  setTimeout(() => {
    let int = BigInt(i);
    let total = 1n;
    while (int > 0) {
      total *= int;
      int--;
    }

    callback(total);
  }, 0);

  //   return undefined;
};

// console.time();
// console.log('1');
factorialAsync(3, (r) => {
  console.log(r);
  // do whatever you want
  //   removeLoading();
});
// paintLoading();

// console.log('2');
// console.timeEnd();

// callback hell

// let result1 = factorialSync(3);
// let result2 = factorialSync(result1);
// let result3 = factorialSync(result2);
// console.log(result3);

// factorialAsync(3, (r1) => {
// //   console.log(r1);
//   factorialAsync(r1, (r2) => {
//     // console.log(r2);
//     factorialAsync(r2, (r3) => {
//     //   console.log(r3);
//     });
//   });
// });

const factorialErrorAsync = (i, callback) => {
  setTimeout(() => {
    if (typeof i !== 'number' || i < 1) {
      callback('no valid i');
      return;
    }
    let int = BigInt(i);
    let total = 1n;
    while (int > 0) {
      total *= int;
      int--;
    }

    callback(null, total);
  }, 0);
};

factorialErrorAsync(3, (error, result) => {
  console.log(error, result);
});

factorialErrorAsync(-3, (error, result) => {
  console.log(error, result);
});

factorialErrorAsync(3, (e, r1) => {
  if (!e) {
    //   console.log(r1);
    factorialErrorAsync(r1, (e, r2) => {
      if (!e) {
        // console.log(r2);
        factorialErrorAsync(r2, (e, r3) => {
          if (!e) {
            //   console.log(r3);
          }
        });
      }
    });
  }
});

// const odds = [1, 2, 3, 4, 5].filter( (num) => num % 2 === 1   );
// console.log(odds);

const cb = (error, result) => {
  console.log(error, result);
};

const num = 3;
factorialErrorAsync(3, (error, result) => {
  console.log(error, result);
});

factorialErrorAsync(num, cb);

factorialErrorAsync(num, console.log);
