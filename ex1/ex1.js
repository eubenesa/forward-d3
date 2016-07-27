function bar(x, y) {
  var z;

  foo(x);
  return z;

  function foo(x) {
    y++;
    z = x * y;
  }
}

console.log(bar(20, 5)); // 120
console.log(bar(25, 6)); // 175
