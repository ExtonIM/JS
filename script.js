'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
    
        }
    },
    showMyDB: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('База данных недосупна')
        }
    },
    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            if (genre == null || genre.length == 0) {
                i--;
                continue;
            } else {
            personalMovieDB.genres.push(genre);
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр № ${i + 1} - это ${item}`);
        });
    },
    rememberMyFilms: function() {
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
    },
    tooggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    }
};
