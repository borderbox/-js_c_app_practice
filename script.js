'use strict';

const numberOfFilms = prompt(`How many films did you saw?`, `42`);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const ask1 = prompt(`One of last film?`, `logan`);
const answer1 = prompt(`Mark of ${ask1}`, `7`);
const ask2 = prompt(`One of last film?`, `red`);
const answer2 = prompt(`Mark of ${ask1}`, `6`);

personalMovieDB.movies[ask1] = answer1;
personalMovieDB.movies[ask2] = answer2;