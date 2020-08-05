// RANDOM NUMBERS

console.log(Math.random()); // -> range [0, 1)

var n = 10; // some number
console.log(Math.random() * n); // -> range [0, n)

// returns a random number between lower and upper
const randomBetween = (lower, upper) => {
    return lower + Math.floor(Math.random() * (upper - lower + 1)); // -> range [lower, upper]
}; //              number of outcomes ---------^^^^^^^^^^^^^^^^^

/*
 Explanation:

  We want a random integer in the range[m, n]
  
  Size of sample space, s = n - m + 1 (think!)
    => s - 1 = n - m    ... (i)
  
  Since Math.random() generates a number in range [0, 1),
  we can multiply it with s to generate a number in the 
  range [0, s) = range [0, s - 1]. 
  
  floor()ing it gives an integer in range [0, s - 1]
  
  Finally on adding m, the range becomes
    = range [m, n - m + m] 
    = range [m, n]  { from (i) } 

*/

console.log(randomBetween(1, 6)); // like a die
console.log(randomBetween(0, 1)); // like a coin flip
console.log(randomBetween(20, 25)); // btw some numbers


// Dice, another way (avoid this)
console.log(((10 * (Math.random().toFixed(1))) % 6) + 1); // -> range [1, 6]
// Demonstrates JS's flexible type system. Although the return value of
// toFixed() is a string, it is used as a number in further calculation
