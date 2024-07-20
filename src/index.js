
// index.js
document.addEventListener('DOMContentLoaded', function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        const dogImageContainer = document.getElementById('dog-image-container');
  
        images.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          dogImageContainer.appendChild(img);
        });
      });
  });
// index.js continued after Challenge 1
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message);
    const breedList = document.getElementById('breed-list');

    breeds.forEach(breed => {
      const li = document.createElement('li');
      li.textContent = breed;
      breedList.appendChild(li);
    });
  });
  // index.js continued after Challenge 2
const breedList = document.getElementById('breed-list');

breedList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.color = 'blue'; // Change color as per your choice
  }
});
// index.js continued after Challenge 3
const breedDropdown = document.getElementById('breed-dropdown');

breedDropdown.addEventListener('change', function(event) {
  const selectedLetter = event.target.value;
  const breeds = breedList.getElementsByTagName('li');

  Array.from(breeds).forEach(breed => {
    const firstLetter = breed.textContent.charAt(0);
    breed.style.display = (firstLetter === selectedLetter) ? 'block' : 'none';
  });
});
