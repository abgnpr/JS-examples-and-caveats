// JSON: parse and strigify

let worldsBestDetective = {
    name: 'Sherlock Holmes',
    addictedTo: 'Smoking',
    address: '122, Baker Street',
    assistantsName: 'John Watson',
    loveOfLife: 'Irene Adeler',
    worstEnemy: 'James Moriarty',
};

// converts an object to JSON string
let SherlocksInfo = JSON.stringify(worldsBestDetective);
console.log(typeof SherlocksInfo === 'string'); // -> true

// one possible application is to store this 
// string in the local storage against a key
// localStorage.setItem('detective', SherlocksInfo);


// converts a JSON string to an object
let myFavDetective = JSON.parse(SherlocksInfo);
console.log(typeof myFavDetective === 'object'); // -> true
