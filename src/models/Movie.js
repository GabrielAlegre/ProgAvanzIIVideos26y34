// src/models/Movie.js

class Movie {
    constructor(id, title, overview, posterPath, releaseDate, voteAverage, original_title, originalLanguage, popularity) {
        this.id = id;
        this.title = title;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.voteAverage = voteAverage;
        this.original_title = original_title;
        this.originalLanguage = originalLanguage; // Idioma original de la película
        this.popularity = popularity; // Popularidad de la película
    }
}

module.exports = Movie;
