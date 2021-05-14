let array = [100, 1, 2, 3, 22];

globalThis.Array.prototype.sortNumeric = function () {
  this.sort(function (a, b) {
    return a - b;
  });
};

array.sortNumeric();

console.log(array);

var arr = [99, 3, 7, 88];

arr.sortNumeric();

console.log(arr);
