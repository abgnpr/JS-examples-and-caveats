// Paste this in an index.html file and start a local server.
// <!DOCTYPE html><html><head><title>Our superheroes</title><link href="https://fonts.googleapis.com/css?family=Faster+One" rel="stylesheet" /><link rel="stylesheet" href="style.css" /></head><body><header></header><section></section><script src="./JSON request.js"></script></body></html>
const header = document.querySelector("header");
const section = document.querySelector("section");
// Functions to update the DOM
function populateHeader(jsonObj) { const myH1 = document.createElement('h1'); myH1.textContent = jsonObj['squadName']; header.appendChild(myH1); const myPara = document.createElement('p'); myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed']; header.appendChild(myPara); }
function showHeroes(jsonObj) { const heroes = jsonObj['members']; for (let i = 0; i < heroes.length; i++) { const myArticle = document.createElement('article'); const myH2 = document.createElement('h2'); const myPara1 = document.createElement('p'); const myPara2 = document.createElement('p'); const myPara3 = document.createElement('p'); const myList = document.createElement('ul'); myH2.textContent = heroes[i].name; myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity; myPara2.textContent = 'Age: ' + heroes[i].age; myPara3.textContent = 'Superpowers:'; const superPowers = heroes[i].powers; for (let j = 0; j < superPowers.length; j++) { const listItem = document.createElement('li'); listItem.textContent = superPowers[j]; myList.appendChild(listItem); } myArticle.appendChild(myH2); myArticle.appendChild(myPara1); myArticle.appendChild(myPara2); myArticle.appendChild(myPara3); myArticle.appendChild(myList); section.appendChild(myArticle); } }



// ____JSON Request___________________________________________________________________________

// JSON resource
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

// new request
let request = new XMLHttpRequest();

// establish connection
request.open('GET', requestURL);

// set response type
request.responseType = 'json';
// or
// request.responseType = 'text';

// send request
request.send();

// wait for response
request.onload = function () {
  const superHeroes = request.response;
  console.log(request.responseType == 'json'); // -> true

  // if responseType is 'text'
  // const superHeroesTxt = request.response;
  // const superHeroes = JSON.parse(superHeroesTxt); // deserialize
  // console.log(request.responseType == 'text'); // -> true

  // Use the object data
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}

// ___________________________________________________________________________________________

