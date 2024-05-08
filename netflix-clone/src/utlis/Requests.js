const API_KEY = 'c7aaf57858b282590b1e45670fb90886';
// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_KEY = '94b5813a5ecea592820023e433e2ca8f';
// const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchGenresMovieList: `/genre/movie/list?api_key=${API_KEY}&language=en`,
};
export default requests;
