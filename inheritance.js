// INHERITANCE


// Base: Device
function Device(brand, model, price) {
  // Properties defined inside the constructor
  this.brand = brand;
  this.model = model;
  this.price = price;
}

// Methods defined on the constructor's prototype
Device.prototype.display = function () {
  console.log(`Introducing the ${this.brand} ${this.model}`);
  console.log(`Price : ₹${this.price}`);
}


// Derived: Phone

// Defining a Phone() constructor function based on Device()
function Phone(brand, model, price, cameraMP) {
  Device.call(this, brand, model, price); // inherited properties
  this.cameraMP = cameraMP; // a feature unique to phones
}

// To make Phone inherit methods defined on Device's prototype
Phone.prototype = Object.create(Device.prototype);

// to be fixed: Phone.prototype.constructor === Device
Object.defineProperty(Phone.prototype, 'constructor', {
  value: Phone,
  enumerable: false,
  writable: true
});
// fixed!, now Phone.prototype.constructor === Phone

// Defining a new display() method on Phone
Phone.prototype.display = function () {
  console.log(`Introducing the ${this.brand} ${this.model} with ${this.cameraMP}MP camera.`);
  console.log(`Price : ₹${this.price}`);
}


// a new object with the derived object constructor
let iPhone = new Phone("Apple", "iPhone XI", 60000, 12);
iPhone.display();
