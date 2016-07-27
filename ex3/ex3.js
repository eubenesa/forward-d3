function mult(prod, num1, ...nums) { // 2 or more
  prod *= num1;
  if (nums.length === 0) {
    return prod;
  } else {
    return mult(prod, ...nums);
  }
}

console.log(mult(3, 4, 5)); // 60
console.log(mult(3, 4, 5, 6)); // 360
