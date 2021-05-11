function helloWorld() {
  console.log(text); // undefined
  var text = 'helloWord';
  console.log(text); // ok
}

// console.log(text); // ReferenceError: text is not defined

// helloWorld();

// inner scope

function helloWorld2() {
  console.log(text); // undefined
  var text = 'helloWord';
  console.log(text); // ok

  function run() {
    console.log(text); // ok
  }
  run();
}

// helloWorld2();

//   overlapping scopes

var text = '0';

function overlap() {
  var text = '1';
  console.log(text);

  function run() {
    var text = '2';

    console.log(text);
  }
  run();
}

// overlap();
// 1
// 2

// global scope

var console = {
  log: function (a) {
    return a;
  },
};

console.log(console); //
