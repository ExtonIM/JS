'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('База данных недосупна')
    }
}

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`, ''));
    }
}

writeYourGenres();

showMyDB();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film1 = prompt("Один из просмотренных фильмов", ''),
              grade1 = prompt("На сколько оцените его?", '');
        if (film1 != null && grade1 != null && film1.length < 50 && film1 != '' && grade1 != '') {
            personalMovieDB.movies[film1] = grade1;
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


console.log(personalMovieDB);