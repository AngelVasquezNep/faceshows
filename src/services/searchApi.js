module.exports = (value) => {
  return fetch(`https://platzi-music-api.now.sh/search?type=track&query=${value}`)
  .then(res => res.json())
  .then(json => json )
  // .then(json => {
  //   this.setState({
  //     resultados: json.tracks.items,
  //     fetchLoadingNoticias: false,
  //     errorResultados: false
  //   })
  // })
  .catch(error => {
    console.log("LO SENTIMOS, TUVIMOS UN ERROR: " + error)
    // this.setState({
    //   fetchLoadingNoticias: false,
    //   errorResultados: true
    // })
  })
}