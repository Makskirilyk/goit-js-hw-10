const BASE_URL = 'https://api.thecatapi.com/v1/';
const api_key =
  'api_key=live_G7nJRuA5s6kytYEBUTv9JbNY1CBU9UkRzIZ72rfs5YZ8bbPez16dz2gS6FCZx5O1';

export function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}images/search?breed_ids=${breedId}&${api_key}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}