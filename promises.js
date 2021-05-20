const factorialPromise = (i) => {
  return new Promise((resolve, reject) => {
    let int = BigInt(i);
    let total = 1n;
    while (int > 0) {
      total *= int;
      int--;
    }
    resolve(total);
  });
};

// let p = factorialPromise(3);
// let p2 = p.then(console.log);
// p2.catch(console.error);

// factorialPromise(3).then(console.log).catch(console.error);

console.log('finished');

// factorialPromise(3).then((r1) => {
//   factorialPromise(r1).then((r2) => {
//     factorialPromise(r2).then((r3) => {
//       console.log(r3);
//     });
//   });
// });

// factorialPromise(3)
//   .then((r1) => factorialPromise(r1))
//   .then(factorialPromise)
//   .then(console.log)
//   .catch((error) => console.error('ups', error));

const asyncJob = (cbThen, cbCatch) => {
  if (Math.random() > 0.5) {
    cbThen('cara');
  } else {
    cbCatch('cruz');
  }
};

const caraOCruz = () => new Promise(asyncJob);

// caraOCruz()
//   .then((result) => {
//     console.log('ha salido cara!', result);
//     throw 'ups';
//   })
//   .then((result) => console.log('ha salido cara!', result))
//   .catch((error) => console.log('ha salido cruz!', error));

// caraOCruz()
//   .then(caraOCruz)
//   .then(caraOCruz)
//   .then((result) => console.log('han salido 3 caras!', result))
//   .catch((e) => console.log('no han salido 3 caras seguidas', e))
//   .finally(() => {
//     console.log('ya he acabado de jugar con la moneda');
//   });

// const promiseAll = Promise.all([
//   caraOCruz(),
//   caraOCruz(),
//   caraOCruz(),
// ]);

// promiseAll
//   .then((result) => console.log('han salido 3 caras!', result))
//   .catch((e) =>
//     console.log('no han salido 3 caras seguidas', e),
//   );

const delay = (time) =>
  new Promise((res) => {
    setTimeout(() => {
      res(time);
    }, time);
  });

const delayRejected = (time) =>
  new Promise((res, reject) => {
    setTimeout(() => {
      reject(time);
    }, time);
  });

const promiseRace = Promise.race([
  delay(400),
  delayRejected(200),
  delay(1000),
]);

promiseRace
  .then((r) => console.log('resolved in ' + r))
  .catch((r) => console.log('rejected in ' + r));

const promiseAny = Promise.any([
  delayRejected(400),
  delayRejected(200),
  delay(1000),
]);

promiseAny
  .then((r) => console.log('resolved in ' + r))
  .catch((r) => console.log('rejected in ' + r));
