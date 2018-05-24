export const searchApi= (value, limit = 20) => {
  return fetch(`https://platzi-music-api.now.sh/search?type=track&query=${value}&limit=${limit}`)
  .then(res => res.json())
  .then(json => json )
  .catch(error => {
    console.log("LO SENTIMOS, TUVIMOS UN ERROR: " + error)
  })
}

export const listArtists = [ 'Luis', 'Rihanna', 'Adele', 'Avicii', 'Enrique Iglesias', 'Despacito', 'Beyoncé', 'Miguel Bosé', 'Despacito', 'Shakira', 'Café Tacuba', 'Romeo Santos', 'Ricky Martin' ]

export const artistRandom = (artists) =>  artists[Math.floor(artists.length * Math.random())]

export const apiArtistas = artistRandom(listArtists)
export const apiMessages = artistRandom(listArtists)
export const apiNoticias = artistRandom(listArtists)