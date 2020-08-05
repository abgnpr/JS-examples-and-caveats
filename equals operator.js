// == vs. ===

// ==  -> smart one (compares values)
// === -> strict one (compares value and type)

console.log(2 == '2'); // -> true !!!!
console.log(2 === '2'); // -> false


// __Equality for various types____________

// 1. numbers

console.log(2 == 2); // -> true
console.log(2 === 2); // -> true

console.log(2 == 2.0); // -> true
console.log(2 === 2.0); // -> true


// 2. strings

console.log('' == ''); // -> true
console.log('' === ''); // -> true

console.log('abc' == 'abc'); // -> true
console.log('abc' === 'abc'); // -> true

let s1, s2;
s1 = 'abc';
s2 = 'abc';
console.log(s1 == s2); // -> true
console.log(s1 === s2); // -> true

s1 = 'abc';
s2 = s1;
console.log(s1 == s2); // -> true
console.log(s1 === s2); // -> true


// 3. arrays

console.log([1, 2, 3] == [1 , 2, 3]); // -> false
console.log([1 , 2, 3] === [1 , 2, 3]); // -> false

let a1, a2;

a1 = [1, 2, 3];
a2 = [1, 2, 3];
console.log(a1 == a2); // -> false
console.log(a1 === a2); // -> false

a1 = [1, 2, 3];
a2 = a1;
console.log(a1 == a2); // -> true
console.log(a1 === a2); // -> true


// 4. objects

console.log({} == {}); // -> false
console.log({} === {}); // -> false

let ob1, ob2;

ob1 = {};
ob2 = {};
console.log(ob1 == ob2);  // -> false
console.log(ob1 === ob2); // -> false

ob1 = {};
ob2 = ob1;
console.log(ob1 == ob2); // -> true
console.log(ob1 === ob2); // -> true
