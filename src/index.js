
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.getElementById('breed-select');
const catInfoContainer = document.querySelector('.cat-info');
const catImage = document.getElementById('cat-image');
const catBreed = document.getElementById('cat-breed');
const catDescription = document.getElementById('cat-description');
const catTemperament = document.getElementById('cat-temperament');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

// Завантаження списку порід
function loadBreeds() {
  loader.style.display = 'block';

  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      loader.style.display = 'none';
      breedSelect.style.display = 'block';
    })
    .catch(error => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
}

function loadCatByBreed(breedId) {
  loader.style.display = 'block';
  catInfoContainer.style.display = 'none';

  fetchCatByBreed(breedId)
    .then(cat => {
      catImage.alt = cat.breeds[0].name;
      catImage.src = cat.url;
      catBreed.textContent = cat.breeds[0].name;
      catDescription.textContent = cat.breeds[0].description;
      catTemperament.textContent = 'Temperament: ' + cat.breeds[0].temperament;

      loader.style.display = 'none';
      catInfoContainer.style.display = 'flex';
    })
    .catch(error => {
      loader.style.display = 'none';
      error.style.display = 'block';
    });
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  loadCatByBreed(selectedBreedId);
});

document.addEventListener('DOMContentLoaded', () => {
  loadBreeds();
});