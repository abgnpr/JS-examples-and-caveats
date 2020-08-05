// Loops

// lets take a map
var John = { name: 'John Doe', age: 24, isActive: true, };
var Mary = { name: 'Mary Jane', age: 22, isActive: true, };
var Samy = { name: 'Samy Po', age: 32, isActive: false };
let users = new Map([['usr1', John], ['usr2', Mary], ['usr3', Samy]]);


// for-of loop

// Looping over users in the map
for (const usr of users)
    console.log(usr);

// looping over the keys in map
for (const key of users.keys())
    console.log(key);

// Looping over values
for (const value of users.values())
    console.log(`Name: ${value.name}\t| age: ${value.age} is ${value.isActive ? 'active' : 'inactive'}.`);

// looping over the key value pair
for (const [key, value] of users.entries())
    console.log(`${key} : ${value.name} is of ${value.age}`);


// forEach loop

users.forEach(
    (value, key) => console.log(`${key} : ${value.name}`)
);// ^^^^^  ^^^--------- note the order
