// Ways of creating Objects

// 1. object literal
let device1 = {
  brand: "OnePlus",
  model: "Nord",
  price: 24999,
  display: function () {
    console.log(`Introducing the ${this.brand} ${this.model}`);
    console.log(`Price : ₹${this.price}`);
  }
};


// 2. Object() constructor
let device2 = new Object();
device2.brand = "Mi";
device2.model = "Power Bank 2i";
device2.price = 899;
device2.display = function () {
  console.log(`Introducing the ${this.brand} ${this.model}`);
  console.log(`Price : ₹${this.price}`);
}


// 3. passing an object literal to Object() constructor
let device3 = new Object({
  brand: "EGATE",
  model: "i9 Projector",
  price: 5990,
  display: function () {
    console.log(`Introducing the ${this.brand} ${this.model}`);
    console.log(`Price : ₹${this.price}`);
  }
});


// 4. constructor function
function Device(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
  this.display = function () {
    console.log(`Introducing the ${this.brand} ${this.model}`);
    console.log(`Price : ₹${this.price}`);
  }
}

// instantitation - new instance of Device
let device4 = new Device("Apple", "Watch Series 3", 23900);


// 5. create() - create a new object based on an existing object
let device5 = Object.create(device3);


// 6. using an exisitng object's constructor property
let device6 = device5.constructor("Lenovo", "Tab3 Essential", "7000")



// uncomment to display devices
// device1.display();
// device2.display();
// device3.display();
// device4.display();
// device5.display();
// device6.display();
