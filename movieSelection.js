/**
 * console.log() ONLY
 * * Notes
 * ! Feature not working
 * ? x
 * @param x
 * TODO: x
 */

class Movie{
    constructor(title, description, rating, releaseYear, movieRating, movieDuration, filmType, director, cast, genre, image, className){
        this.title = title;
        this.description = description;
        this.rating = rating;
        this.releaseYear = releaseYear;
        this.movieRating = movieRating;
        this.movieDuration = movieDuration;
        this.filmType = filmType;
        this.director = director;
        this.cast = cast;
        this.genre = genre;
        this.image = image;
        this.className = className;
    }
}

var movie = [new Movie("Peaky Blinders", "Peaky Blinders is a British crime drama Netflix TV series created by Steven Knight. Netflix had acquired the rights to air Peaky Blinders in U.S.A & around the world&#44 under the deal with Weinstein Company and Endemol",
            "100% Match", "2022", "<i class='fa-solid fa-r'></i>", "120 mins", "series", "Steven Knight", "Cillian Murphy Tom Hardy Helen McCrory", "Crime British Period-Piece", "url(/images/PB.jpg)", "peakyBlinders"),
            new Movie("Bojack Horseman", "Meet the most beloved sitcom horse of the &#39 90s 20 years later. He&#39;s a curmudgeon with a heart of...not quite gold...but something like gold. Copper?",
            "99% Match", "2020", "<i class='fa-solid fa-r'></i>", "60 mins", "series", "Raphael Bob-Waksberg", "Will Arnett Aaron Paul Amy Sedarie", "Sitcom Comedy Adult-Animation", "url(./images/BH.jpg)", "bojackHorseman"),
            new Movie("Umbrella Academy", "Reunited by their father&#39s death&#44 estranged siblings with extraordinary powers uncover shocking family secrets -- and a looming threat to humanity.",
            "98% Match", "2022", "PG-13", "90 mins", "series", "Steve Blackman", "Elliot Page Tom Hopper Aidan Gallagher", "Sci-Fi Comics", "url(./images/UA.jpg)", "umbrellaAcademy")];

function selectedMovie(movieLink){
    let loadPage = "./movieSelection.html";
    console.log("selectedMovie() called");

    if(movieLink.hasClass("peakyBlinders")){
        setMovieVars(movie[0]);
        changePages(loadPage);
    }
    else if(movieLink.hasClass("bojackHorseman")){
        setMovieVars(movie[1]);
        changePages(loadPage);
    }
    else if(movieLink.hasClass("umbrellaAcademy")){
        setMovieVars(movie[2]);
        changePages(loadPage);
    }
}

function setMovieVars(movie){
    localStorage.setItem("title", movie.title);
    localStorage.setItem("description", movie.description);
    localStorage.setItem("rating", movie.rating);
    localStorage.setItem("releaseYear", movie.releaseYear);
    localStorage.setItem("movieRating", movie.movieRating);
    localStorage.setItem("movieDuration", movie.movieDuration);
    localStorage.setItem("filmType", movie.filmType);
    localStorage.setItem("director", movie.director);
    localStorage.setItem("cast", movie.cast);
    localStorage.setItem("genre", movie.genre);
    localStorage.setItem("image", movie.image);
    localStorage.setItem("className", movie.className);
}

function changePages(loadPage){
    location.replace(loadPage);
}