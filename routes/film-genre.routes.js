const Router = require('express');
const filmGenreController = require('../controller/film-genre.controller');

const router = new Router();

router.post('/fg', filmGenreController.createFilmGenre);
router.get('/fg', filmGenreController.getFilmsGenres);
router.get('/fg/:id', filmGenreController.getOneFilmGenre);
router.put('/fg/:id', filmGenreController.updateFilmGenre);
router.delete('/fg/:id', filmGenreController.deleteFilmGenre);

module.exports = router;