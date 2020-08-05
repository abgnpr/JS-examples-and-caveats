// ES6 Class

// 1. Class Definition

// Base class
class User {

    // class constructor
    constructor(firstname, lastname, age) {
        // properties
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // a method - getter
    getFullName() { return `${this.firstname} ${this.lastname}`; }

    // another method - setter
    editName(newname) {
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}

// create a new object of type 'User'
const John = new User('John', 'Anderson', 21);
console.log(John);

// if nothing is passed for the constructor
const Sammy = new User();
console.log(Sammy); // -> all keys undefined

// calling class methods
console.log(John.getFullName()); // -> John Anderson
John.editName('Jhonny Anderson');
console.log(John.getFullName()); // -> Jhonny Anderson


// 2. Inheritance and Method Overriding

// Derived(Sub) Class
class Teacher extends User {

    // class constructor
    constructor(firstname, lastname, age, subject) {
        // parent class constructor
        super(firstname, lastname, age); // necessary!
        // property
        this.subject = subject;
    }

    // method overriding
    getFullName() { return `Prof. ${this.firstname} ${this.lastname}`; }
} //                       ^^^^^--- added

// a new object of type 'Teacher'
const tim = new Teacher('Tim', 'Barton', 50, 'DSA');

// inherited property
console.log(`${tim.firstname}'s age: ${tim.age}`); // -> Tim's age: 50

// overriden method
console.log(tim.getFullName()); // -> Prof. Tim Barton 

// inherited method
tim.editName('Tim Roughgarden');
console.log(tim.getFullName()); // -> Prof. Tim Roughgarden
