let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
      }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
}

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";
  
    const titleElement = document.createElement("h3");
    titleElement.textContent = "Movies:";
    movieList.appendChild(titleElement);
  
    const listElement = document.createElement("ul");
    movieList.appendChild(listElement);
  
    allMovies.forEach((movie) => {
      const listItemElement = document.createElement("li");
      listItemElement.textContent = `Title: ${movie.title} | Rating: ${movie.rating} | Watched: ${movie.haveWatched}`;
      listElement.appendChild(listItemElement);
    });
  
    const totalElement = document.createElement("p");
    totalElement.textContent = `Total Movies: ${allMovies.length}`;
    movieList.appendChild(totalElement);
}


//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    console.log("----------------");
    console.log(`Movies with a rating higher than ${rating}:`);
    console.log("-------");
    let matches = allMovies.filter((movie) => movie.rating > rating);
    matches.forEach((movie) => {
      console.log(
        `Title: ${movie.title} | Rating: ${movie.rating} | Watched: ${movie.haveWatched}`
      );
    });
    console.log("Total Matches:", matches.length);
    console.log("----------------");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    const movieToUpdate = allMovies.find((movie) => movie.title === title);
    if (movieToUpdate) {
      movieToUpdate.haveWatched = !movieToUpdate.haveWatched;
      console.log(`Movie watched state updated for ${title}.`);
    } else {
      console.log(`Movie with title "${title}" not found.`);
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);