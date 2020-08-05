// CRUD using the localStorage
//    Note: only key-value pairs can be stored in local storage.

/* create */
localStorage.setItem('my superhero', 'Deadpool');

/* read */
console.log(localStorage.getItem('my superhero'));

/* update */
localStorage.setItem('my superhero', 'Black Panther');

/* delete */ 
localStorage.removeItem('my superhero');

/* storing values using a simple loop */
let names = ['Abhigyan', 'Bean', 'Jerry', 'Oggy', 'Kowalski', 'Rico'];
names.forEach((name, index) => localStorage.setItem('name'.concat(index+1), name));
