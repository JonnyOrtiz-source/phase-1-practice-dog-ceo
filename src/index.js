'use strict';
const breeds = [];

function renderDogImgs(dogImgs) {
   const imgContainer = document.getElementById('dog-image-container');
   dogImgs.forEach((element) => {
      const imgItem = document.createElement('img');
      imgItem.src = `${element}`;
      imgItem.alt = 'dog image';
      imgContainer.append(imgItem);
   });
}
function handleBreed(e) {
   e.target.style.color = 'blue';
}
function renderBreeds(breedsObj) {
   const breedsList = document.getElementById('dog-breeds');
   breedsList.innerHTML = '';
   for (const breed in breedsObj) {
      const breedItem = document.createElement('li');
      breedItem.textContent = breed;
      breeds.push(breed);
      breedsList.appendChild(breedItem);
      breedItem.addEventListener('click', handleBreed);
   }
}
function getDogImgs() {
   const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
   fetch(imgUrl)
      .then((resp) => resp.json())
      .then((dogImgs) => renderDogImgs(dogImgs.message));
}
function getBreeds() {
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';
   fetch(breedUrl)
      .then((resp) => resp.json())
      .then((breed) => {
         renderBreeds(breed.message);
      });
}
function handleDropDown(e) {
   const breedsObj = {};
   const filteredBreedsList = breeds.filter((breed) => breed[0] === e.target.value);
   filteredBreedsList.forEach((breed) => (breedsObj[breed] = []));
   renderBreeds(breedsObj);
}
function filterBreeds() {
   const breedDropDown = document.getElementById('breed-dropdown');
   breedDropDown.addEventListener('change', handleDropDown);
}

function init() {
   getDogImgs();
   getBreeds();
   filterBreeds();
}

console.log('%c HI', 'color: firebrick');
init();
