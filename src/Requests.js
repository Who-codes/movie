const API_KEY = "bda7a1a20f004e499e9b4dc760bec887";

export const fetchMovie = {
  trending: `trending/movie/day?api_key=${API_KEY}`,
  action: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  adventure: `discover/movie?api_key=${API_KEY}&with_genres=12`,
  romance: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  horror: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  commedy: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  documentry: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  animation: `discover/movie?api_key=${API_KEY}&with_genres=16`,
};
