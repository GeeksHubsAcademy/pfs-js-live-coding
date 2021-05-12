// while

var index = 0;
while (Math.random() > 0.5) {
  console.log('index ', index++);
}

var i = 10;
while (i < 20) {
  console.log('index ', i++);
}

var j = 0;
while (j < 0) {
  console.log('j', j);
  j++;
}

// do while
var k = 0;
do {
  console.log('k', k);
  k++;
} while (k < 0);

// for

for (let l = 0; l < 3; l++) {
  console.log('l', l);
}

var m = 0;
while (m < 3) {
  console.log('m', m);
  m++;
}

// break and continue

for (var n = 0; n < 10; n++) {
  if (n === 1) {
    console.log('skip 1');
    continue;
  }
  if (n === 8) {
    break;
  }
  console.log('n', n);
}

// var o = 0;
// while (o < 10) {
//   if (o === 1) {
//     console.log('skip 1');
//     continue; // ojo no incrementa el indice y se queda siempre en 0 === 1
//   }
//   if (o === 8) {
//     break;
//   }
//   console.log('o', o);
//   o++; // ojo!
// }

// for of
for (var item of [1, 2, 3]) {
  console.log('item', item);
}

// for of
var indexItem = 0;
for (var item of [1, 2, 3]) {
  console.log('item', item, indexItem);
  indexItem++;
}

for (var char of 'my string') {
  console.log('char', char);
}

// for in
var object = {
  a: 1,
  b: 2,
  c: 3,
};

for (var key in object) {
  console.log('key', key, object[key]);
}
var array = [4, 5, 6];
for (var keyIndex in array) {
  console.log('keyIndex', keyIndex, array[keyIndex]);
}
