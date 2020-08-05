// COERCION
// JS tries to be smart when it comes to coercion.

// an example where js predicts that '-'
// operation can be performed only
// between two numbers, so it converts
// '5' to a number
console.log('5' - 5); // -> 0


// here 5 is coerced to string. JS 
// predicts that + is for string concat
console.log('5' + 5); // -> 55 (string)


// Tip:
// Use typeof to determine the type of your
// literals or variables before using them
// in expressions. Do not expect JS to give
// predicatable results on its own.
console.log(typeof 2);   // -> number
console.log(typeof '2'); // -> string
