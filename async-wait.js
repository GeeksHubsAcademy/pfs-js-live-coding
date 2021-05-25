async function get100() {
  return 100;
}
// function get() {
//   return new Promise((res) => {
//     res(100);
//   });
// }

// const promise = get100();
// console.log(promise);
// promise.then(console.log); //100

async function double100() {
  const hundred = await get100();
  //   const hundred = await 100;
  //   const hundred =  100;
  return hundred * 2;
}

// double100().then(console.log).catch(console.error);

const factorialPromise = async (i) => {
  if (typeof i !== 'number' || i < 0) {
    throw new Error('not valid number');
  }
  let int = BigInt(i);
  let total = 1n;
  while (int > 0) {
    total *= int;
    int--;
  }
  return total;
};

factorialPromise(-3).then(console.log);
// .catch(console.log);

// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(2));
// console.log(Number.isNaN('2'));
