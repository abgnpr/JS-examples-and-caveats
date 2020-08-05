// Ways of writing arrow functions

// 1
const hello1 = (name) => { return "Hello, " + name + " !"; }
console.log(hello1("Jon"));

// 2
const hello2 = (name) => { return `Hello, ${name}`; } // template string
console.log(hello2("Rob"));

// 3
const hello3 = (name) => `Hello, ${name}`;
console.log(hello3("Arya"));


// 'this' problem with arrow functions

// an object
let ob = {
  name: "Box",
  description: () => { return `\nThis is an object called ${this.name}`; },

  this_insideArrowFn: () => { return this; }, // -> this === window (or module.exports)
  this_insideNormalFn: function () { return this; } // -> this === ob
};

// problem !!
console.log(ob.description()); // -> This is an object called undefined
//                                                            ^^^^^^^^^
// Cause: 'this' inside an arrow function refers 
// to the global object and not the object in
// which the arraow function resides.
// See globalObject.js for more information on
// global 'this'

// Note:

console.log('\nValue of this inside an arrow fn in an object:');
console.log(ob.this_insideArrowFn());

console.log('\nValue of this inside a normal fn in an object:');
console.log(ob.this_insideNormalFn());
