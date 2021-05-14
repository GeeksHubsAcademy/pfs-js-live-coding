function run(a, b, c) {
  console.log('i am running', a, b, c);
}

var id = setTimeout(run, 1000, 88, 99, 100);

console.log('timeout id:', id);
console.log('anything else in this script');

if (Math.random() > 0.5) {
  clearTimeout(id);
}
var i = 1e9;
while (i--) {}
console.log('while finished');

// setInterval

var j = 0;
var intervalId = setInterval(function () {
  j++;
  j > 3 && clearInterval(intervalId);
  console.log('interval running');
}, 2000);
