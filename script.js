let numberOfFilms ;
function start () {
   let numberOfFilms = +prompt ("сколько фильмов ви уже пепесмотрели?", "");
   while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)) {
      numberOfFilms = +prompt ("сколько фильмов ви уже пепесмотрели?", "");
   }
 }
 start();




const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};






function rememberMyFilms (){
   for(let i = 0; i < 2; i++) {
   const asskUserA = prompt ("Один из последних просмотрених фильмов?", "Forsajj"),
         asskUserB = +prompt ("На сколько оцентваете его?", "1/10");

         if(asskUserA != null && asskUserB != null && asskUserA.length < 50 &&asskUserA != "" && asskUserB != "") {
         
           personalMovieDb.movies[asskUserA] = asskUserB;
           console.log("done");
         }else {
            console.log ("error");
            i--;
         }
      
}
}

//rememberMyFilms();

// верхній вираз також є правильний
/*let assk = 0;
while (assk < 2) {
   const asskUserA = prompt ("Один из последних просмотрених фильмов?", "Forsajj"),
   asskUserB = +prompt ("На сколько оцентваете его?", "1/10");
   if(asskUserA != null && asskUserB != null && asskUserA.length < 50 &&asskUserA != "" && asskUserB != "") {
         
      personalMovieDb.movies[asskUserA] = asskUserB;
      console.log("done");
    }else {
       console.log ("error");
      
    }
    assk++;
}/*

/*for (let i = 1; i <= 3; i++){
   const asskUserA = prompt ("Один из последних просмотрених фильмов?", "Forsajj"),
   asskUserB = +prompt ("На сколько оцентваете его?", "1/10");
   if(asskUserA != null && asskUserB != null && asskUserA.length < 50 &&asskUserA != "" && asskUserB != "") {
         
      personalMovieDb.movies[asskUserA] = asskUserB;
      console.log("done");
    }else {
       console.log ("error");
      i--;
    }
      
}*/

function detectPersonalLevel () {
   if (personalMovieDb.count < 10){
   console.log("ви поганий глядач");
}else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30 ) {
   console.log("ви суперовий глядач");
}else if (personalMovieDb.count >=30) {
   console.log("ви супер кіноман");
}else {
   console.log("errors chuerrors"); 
} 

console.log (personalMovieDb);

}

//detectPersonalLevel();

function showMyDb (hidden){
   if (!hidden){
     console.log(personalMovieDb); 
   }

}

showMyDb(personalMovieDb.privat);

function writeYourGenres (){
   for (let i = 1; i <= 3; i++){  
      personalMovieDb.genres[i - 1] = prompt (`ваш найкращий жанр під номером ${i}`);
   }
}

writeYourGenres(); 








/*console.log( !1 && 2 || !3 );
 
console.log( 25 || null && !3 );
console.log( NaN || null || !3 || undefined || 5);
console.log( NaN || null && !3 && undefined || 5);
console.log( 5 === 5 && 3 > 1 || 5);


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!')
}

let hamburger;
const fries = NaN;
const cola = 1;
const nuggets = 2;
 
if (hamburger && cola || fries === 3 && nuggets) {
   console.log('Done!');
}*/




