// MAPS

// Creating maps

// a new map
let users = new Map();

// Create some objects and insert them 
// into the map against unique keys
var John = { name: 'John Doe', age: 24, isActive: true, };
var Mary = { name: 'Mary Jane', age: 22, isActive: true, };
var Samy = { name: 'Samy Po', age: 32, isActive: false };
users.set('usr1', John);
users.set('usr2', Mary);
users.set('usr3', Samy);

// Creating maps using an array of arrays
// containing [key, object] pairs.
var arrOfArrs = [['one', 1], ['two', 2], ['three', 3]];
var numbers = new Map(arrOfArrs);
console.log(numbers);


// Basic Operation

// shows the map
console.log(users);

// size of the map
console.log(users.size); // -> 3

// prints all info abt usr 2
console.log(users.get('usr2'));

// returns an object containing keys
console.log(users.keys());

// returns an object containing values
console.log(users.values());

// returns an iterable of each key, value pairs
console.log(users.entries()); // entries

// checks whether the map has the given key
console.log(users.has('John')); // -> false
console.log(users.has('usr3')); // -> true


/* Note

  1. a map is a specialized object for
  storing key value pairs.

  2. typeof users is 'object'

  3. Maps always return an iterable so we
  can easily loop through them.

  4. A big difference btw maps and objs
  is that we can easily find the number
  of entities in a map using .size (a property)
  which requires loops in objs

  5. A use case: Maps help in pushing objects
  into a noSQL database as we can't insert
  vanilla objects into it.

  Refer MDN Docs - JS maps

*/
