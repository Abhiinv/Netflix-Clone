const API_KEY = "a316ff38f7a70badcc5451052d536697";

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&with_networks=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&with_networks=213`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&with_networks=213`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80&with_networks=213`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&with_networks=213`,
    fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18&with_networks=213`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
};

export default requests;