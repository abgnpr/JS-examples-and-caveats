// try-catch : GRACEFUL HANDLING OF ERRORS

// note: a better approach is 'promises',
// like in the case of handling web requests

//  a scenario

const convToINR = (_USD) => _USD * 64;
console.log(convToINR(5));      // -> works fine
console.log(convToINR('5'));    // -> still works fine
console.log(convToINR('five')); // -> prints NaN, bad
// this last case needs to be handled inside the function.

// fn convToINR v2
const convToINR_v2 = (_USD) => {
  if (typeof _USD === 'number')
    return _USD * 64;
  else
    throw Error('Amount not in numbers!');
};

// note: interface errors usually occurs when we mistype sth

/*

// the error here freezes the program flow,
// the error is shown and then the program
// stops
console.log(convToINR_v2('five')); // -> generates error
console.log('This line not printed if the program crashes above.'); // -> not printed

*/


// try-catch ensures that the progra does not freeze.

try {
  console.log(convToINR_v2('five'));

} catch (error) {
  console.log(error.message);
}

console.log('This line not printed if the program crashes above.'); // -> gets printed!
