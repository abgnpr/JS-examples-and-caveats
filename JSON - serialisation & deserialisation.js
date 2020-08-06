// JSON: parse and strigify

let worldsBestDetective = {
    name: 'Sherlock Holmes',
    addictedTo: 'Smoking',
    address: '122, Baker Street',
    assistantsName: 'John Watson',
    loveOfLife: 'Irene Adeler',
    worstEnemy: 'James Moriarty',
};

// serialization
// converting a native object to string
let SherlocksInfo = JSON.stringify(worldsBestDetective);
console.log(typeof SherlocksInfo === 'string'); // -> true

// Applications:
// 1. Useful when we want to tranmit data over network; or
// 2. We can store this string in the local storage against a key
// localStorage.setItem('detective', SherlocksInfo);


// deserialization
// converting a string to a native object
let myFavDetective = JSON.parse(SherlocksInfo);
console.log(typeof myFavDetective === 'object'); // -> true
