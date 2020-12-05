const BASE_URL = 'https://rickandmortyapi.com/api';

export const searchApi = (value = "", limit = 20) => {
  return fetch(`${BASE_URL}/character/?name=${value}`)
    .then((res) => {
      if (res.status === 404) {
        return { results: [] };
      }

      return res.json();
    })
    .then((json) => json.results)
    .catch((error, ...rest) => {
      console.error('Error at fetch: ', error, rest);
      return Promise.reject(error);
    });
};

export const listArtists = [
  'Luis',
  'Rihanna',
  'Adele',
  'Avicii',
  'Enrique Iglesias',
  'Despacito',
  'Beyoncé',
  'Miguel Bosé',
  'Despacito',
  'Shakira',
  'Café Tacuba',
  'Romeo Santos',
  'Ricky Martin'
];

export const artistRandom = (artists) =>
  artists[Math.floor(artists.length * Math.random())];

export const apiArtistas = artistRandom(listArtists);
export const apiMessages = artistRandom(listArtists);
export const apiNoticias = artistRandom(listArtists);
