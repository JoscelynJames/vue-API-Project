// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import API from './lib/API';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#body-div',
  mounted() {
    this.load();
    setTimeout(() => {
      this.loadTwo();
    }, 1000);
  },
  methods: {
    load() {
      const api = new API();
      api.getFilms()
        .then((results) => {
          this.films = results;
        });
    },
    loadTwo() {
      const api = new API();
      for (let i = 0; i < this.films.length; i += 1) {
        api.getMovie(this.films[i].title)
          .then((results) => {
            if (!results.results[0].poster_path) return 'There is no poster for this movie :(';
            this.filmPosters[this.films[i].title] = `${this.posterUrl}${results.results[0].poster_path}`;
            return null;
          });
      }
    },
    onChangeHandler(e) {
      this.selected = e.target.value;
      Object.keys(this.filmPosters)
        .forEach((key) => {
          if (key === this.selected) this.currentFilmPosterUrl = this.filmPosters[key];
        });
    },
  },
  data() {
    return {
      selected: 'Select a Movie To Start',
      films: [],
      posterUrl: 'http://image.tmdb.org/t/p/w342',
      filmPosters: {},
      currentFilmPosterUrl: '',
    };
  },
});
