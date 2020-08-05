// The global object in different environments

// browser
// this === window // -> true
// this === globalThis // -> true

// node scripts
// console.log(this === module.exports); // -> true

// node terminal
// this === global // -> true
// this === globalThis // -> true

// deno scripts
// console.log(this === undefined); // -> true

// deno terminal
// this === window // -> true
// this === globalThis // -> true


// We can use these to identify the
// environment in which the script is running

const isBrowser = () => {
  try { return this === window } catch { return false }
}

const isNode = () => {
  try { return this === module.exports } catch { return false }
}

const isDeno = () => {
  try { return this === undefined } catch { return false }
}

if (isBrowser()) console.log('Browser')
if (isNode()) console.log('Node');
if (isDeno()) console.log('Deno');
