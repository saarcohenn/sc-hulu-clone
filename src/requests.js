const API_KEY = '55594cf2fb07731ec2c648d730ad364e';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, 
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=10749`,
    fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=9648`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=878`,
    fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=37`,
    fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&lwith_genres=16`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&lwith_genres=10770`,
};