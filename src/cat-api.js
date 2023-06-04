export function fetchBreeds() {
    const apiKey = "live_G7nJRuA5s6kytYEBUTv9JbNY1CBU9UkRzIZ72rfs5YZ8bbPez16dz2gS6FCZx5O1"; 
    return fetch('https://api.thecatapi.com/v1/breeds', {
      headers: {
        'x-api-key': apiKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      throw new Error(error.message);
    });
  }
  
  export function fetchCatByBreed(breedId) {
    const apiKey = "live_G7nJRuA5s6kytYEBUTv9JbNY1CBU9UkRzIZ72rfs5YZ8bbPez16dz2gS6FCZx5O1"; 
  
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`, {
      headers: {
        'x-api-key': apiKey
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Oops! Something went wrong! Try reloading the page!');
      }
      return response.json();
    })
    .then(data => {
      return data[0];
    })
    .catch(error => {
      throw new Error(error.message);
    });
  }