const API_KEY = "2bc128af8b697a4fb9e3274ea0c9d657";

const requests = {
    obtainTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    obtainNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    obtainTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    obtainActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    obtainComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    obtainHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    obtainRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    obtainDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;