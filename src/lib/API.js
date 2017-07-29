export default class API {
  constructor() {
    this.FILM_API_URL = 'https://ghibliapi.herokuapp.com/films';
    this.MOVIE_DB_URL = 'https://api.themoviedb.org/3/search/movie?api_key=622adf41b45348d5c282155e5fc75b63&query=';
  }
  getFilms() {
    return fetch(this.FILM_API_URL)
      .then(res => res.json());
  }
  getMovie(query) {
    return fetch(this.MOVIE_DB_URL + query)
      .then(res => res.json());
  }
}
