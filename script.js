
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

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



console.log(personalMovieDB);