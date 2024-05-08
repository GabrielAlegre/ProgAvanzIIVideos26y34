// routes/movieRoutes.js

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/', async (req, res) => {
    try {
        const movies = await movieController.getPopularMovies();
        res.render('movies', { movies });
    } catch (error) {
        console.error('Error obteniendo películas populares:', error);
        res.status(500).send('Error obteniendo películas populares');
    }
});

// Ruta para mostrar los detalles de una película específica
router.get('/verDetallePelicula/:id', async (req, res) => {
    try {
        const movieId = req.params.id;
        // Aquí llamas a una función en tu controlador para obtener los detalles de la película por su ID
        const movie = await movieController.getMovieDetailsById(movieId);
        res.render('movieDetail', { movie });
    } catch (error) {
        console.error('Error obteniendo detalles de la película:', error);
        res.status(500).send('Error obteniendo detalles de la película');
    }
});


module.exports = router;
