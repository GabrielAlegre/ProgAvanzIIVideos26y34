const express = require('express');
const movieRouter = require('./src/router/moviesRoutes'); // Así se llamaría tu archivo de rutas

const app = express();

// Configuración del motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/', (req, res) => {
    res.render('index'); // Renderiza el archivo home.ejs
});

// Ruta principal para mostrar las películas populares
app.use('/peliculas', movieRouter);


// Puerto de escucha del servidor
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
