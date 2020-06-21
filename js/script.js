// Программа просмотра фильмов!

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('Выставите свою оценку просмотренному фильму', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('Выставите свою оценку просмотренному фильму', '');


personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);