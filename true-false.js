// TRUE and FALSE

// In JS, value of 'true' is 1 and value
// of false is 0, real literals, not just
// true and false

// const sum1 = true + 5;
// const sum2 = 5 + false;
// console.log(sum1); // -> 6
// console.log(sum2); // -> 5


// A scenario where undefined acts as false.

// fetching login details from some
// database but fetching failed
const loginDetails = {};

/* accessing the login ID */
const loginID = loginDetails.id;

/* checking loginID */
if (loginID !== undefined)
  console.log('Allow user to login.');
else
  console.log('Authentication failed.'); // -> printed

// can also be written as
if (loginID)
  console.log('Allow user to login.');
else
  console.log('Authentication failed.');


// FALSY VALUES: values that evaluate to false

// 1. false
const condition = false;
condition ? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates flase

// 2. 0
const num = 0;
num ? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates flase

// 3. empty string ''
const str = '';
str ? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates flase

// 4. undefined
const someVar1 = undefined;
someVar1 ? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates flase

// 5. null
const someVar2 = null;
someVar2 ? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates flase


// TRUTHY VALUES
// Apart from the above given falsy values everything else 
// evaluates to true even empty arrays and empty objects!

const arr = [];
arr? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates true

const obj = {};
obj? console.log('evaluates true.') : console.log('evaluates flase');
// -> evaluates true
