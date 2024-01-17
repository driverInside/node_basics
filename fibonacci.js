// function fibonacci(n) { 
//   if (n === 1) return 0;
//   if (n === 2) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

const values = [0, 1];

function fibonacci(n) {
  for (let i = 2; i < n; i++) {
    values[i] = values[i - 1] + values[i - 2];
  }

  return values[n - 1];
}

console.log(fibonacci(1)); // 0
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 1
console.log(fibonacci(4)); // 2
console.log(fibonacci(5)); // 3
console.log(fibonacci(6)); // 5
console.log(fibonacci(7)); // 8
console.log(fibonacci(8)); // 13
console.log(fibonacci(9)); // 21


  