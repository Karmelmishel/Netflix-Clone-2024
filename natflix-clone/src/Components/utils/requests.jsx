const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  Trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  NetflixOrginal: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  TopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  ActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  AnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  ComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  HorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  RomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  Documentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  Upcoming: `/movie/upcoming?api_key=${API_KEY}`,
  TVShow: `/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;