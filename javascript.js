
let numberOfFilms = +prompt ("сколько фильмов ви уже пепесмотрели?", "");

const personalMovieDb = {
    count: "numberOfFilms",
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const asskUserA = prompt ("Один из последних просмотрених фильмов?", "Forsajj"),
      asskUserB = prompt ("На сколько оцентваете его?", "1/10"),
      asskUserC = prompt ("Один из последних просмотрених фильмов?", "Forsajj"),
      asskUserD = prompt ("На сколько оцентваете его?", "1/10");

personalMovieDb.movies[asskUserA] = asskUserB;
personalMovieDb.movies[asskUserC] = asskUserD;

console.log (personalMovieDb);