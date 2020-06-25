
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const film1 = prompt("Один из просмотренных фильмов", ""),
      grade1 = prompt("На сколько оцените его?", ""),
      film2 = prompt("Один из просмотренных фильмов", ""),
      grade2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[film1] = grade1;
personalMovieDB.movies[film2] = grade2;


console.log(personalMovieDB);