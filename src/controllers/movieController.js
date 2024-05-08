// controllers/movieController.js

const axios = require('axios');
const Movie = require('../models/Movie');

const API_KEY = '92df92a4547346e11a1616f2eea4ae8f';
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

async function getPopularMovies() {
    try {
        const response = await axios.get(API_URL);
        const moviesData = response.data.results;
        const movies = moviesData.map(movie => {
            return new Movie(
                movie.id,
                movie.title,
                movie.overview,
                `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                movie.release_date,
                movie.vote_average,
            );
        });
        return movies;
    } catch (error) {
        console.error('Error fetching popular movies:', error);
        return [];
    }
}

async function getMovieDetailsById(movieId) {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        const movieData = response.data;
        
        const movie = new Movie(
            movieData.id,
            movieData.title,
            movieData.overview,
            `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`,
            movieData.release_date,
            movieData.vote_average,
            movieData.original_title,
            movieData.original_language,
            movieData.popularity
        );

        return movie;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw new Error('Error fetching movie details');
    }
}

module.exports = {
    getPopularMovies,
    getMovieDetailsById
};
