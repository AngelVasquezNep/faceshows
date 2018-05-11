export const searchApi= (value) => {
  return fetch(`https://platzi-music-api.now.sh/search?type=track&query=${value}`)
  .then(res => res.json())
  .then(json => json )
  .catch(error => {
    console.log("LO SENTIMOS, TUVIMOS UN ERROR: " + error)
  })
}

export const listArtists = [ 'Luis', 'Rihanna', 'Adele', 'Avicii', 'Enrique Iglesias', 'Despacito', 'Beyoncé', 'Miguel Bosé' ]

export const artistRandom = (artists) =>  artists[Math.floor(artists.length * Math.random())]
