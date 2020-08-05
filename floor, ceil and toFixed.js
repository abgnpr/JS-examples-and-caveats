// floor()
console.log(Math.floor(Math.PI)); // -> 3 (number)

// ceil()
console.log(Math.ceil(Math.PI));  // -> 4 (number)

// toFixed()
//   Fixes the number of digits after the decimal point. 
//   Must be in the range 0 - 20; return type: string
let number = (22 / 7).toFixed(2);
console.log(number); // -> 3.14 (string)
console.log(Math.PI); // -> 3.141592653589793 (number)
console.log(Math.PI.toFixed(2)); // -> 3.14 (string)
