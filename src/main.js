// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import App from './App';
import API from './lib/API';


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue(
  {
    el: '#body-div',
    mounted() {
      this.load();
      this.loadTwo();
    },
    methods: {
      load() {
        const api = new API();
        api.getFilms()
          .then((results) => {
            // console.log(results);
            this.films = results;
            console.log('getFilms load finsihed');
          });
      },
      loadTwo() {
        console.log('getMovie load finished');
        const api = new API();
        for (let i = 0; i < this.films.length; i += 1) {
          console.log('working');
          api.getMovie(this.films[i])
            .then((results) => {
              console.log(results);
              this.movie = results;
            });
        }
      },
    },
    data() {
      return {
        selected: '',
        films: [],
        posterURL: 'http://image.tmdb.org/t/p/w342',
        filmPosters: [],
      };
    },
  },
);
