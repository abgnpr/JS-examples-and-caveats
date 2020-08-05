// protoype and constructor


// Object Definition

//  Style convention: 
//  Define properties on the constructor function &
//  methods on the constructor's prototype property.

// a constructor function defining properties
function Device(brand, model, price, imgSrc) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.imgSrc = imgSrc;
}

// Every constructor has a prototype property 
// (a bucket for things to be inherited without copying)
console.log(
  Device.prototype
);

// Adding methods by modifying the constructor's prototype property
Device.prototype.display = function () {
  console.log(`Introducing the ${this.brand} ${this.model}`);
  console.log(`Price : ₹${this.price}`);
}


// a new object using the constructor function
let device1 = new Device("Apple", "Watch Series 3", 23900);

// Object's prototype property
console.log(
  Object.getPrototypeOf(device1)
); // or
console.log(
  device1.__proto__
);

// Note: An object's prototype property refers to its constructor's prototype property.
console.log(
  Object.getPrototypeOf(device1) === Device.prototype // -> true
); // or
console.log(
  device1.__proto__ === Device.prototype // -> true
);


// Prototype Chaining

// a new object using another object as its prototype
let device2 = Object.create(device1);

// Note:

console.log(
  device2.__proto__ === Device.prototype // -> false
);
console.log(
  device2.__proto__ === device1 // -> true
);
console.log(
  device2.__proto__.__proto__ === Device.prototype // -> true
);

// demonstration of prototype chain traversal
device2.display();
//    .display(), being unavailable in device2, 
//    is searched in its protoype i.e. device1,
//    which too lacks it, so it's further searched
//    up the prototype chain until its finally 
//    found in the prototype of device1's 
//    constructor i.e.'Device()'



// Constructor property

console.log(
  device1.constructor === Device// -> true
);
console.log(
  device1.constructor.name // -> "Device"
);

// create a new object using an existing object's constructor property
let device3 = new device2.constructor("Lenovo", "Tab3 Essential", "7000", ""); // equivalent to 'new Device(...)'
//    as in the case of .display() above, here
//    device2 doesn't contain a 'constructor' property
//    but device1 has it, so the prototype chain is 
//    traversed upwards to access it.



// uncomment to display
// device1.display();
// device2.display();
// device3.display();
