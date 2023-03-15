const Router = require('express');
const filmController = require('../controller/film.controller');

const router = new Router();

router.post('/film', filmController.createFilm);
router.get('/film', filmController.getFilms);
router.get('/film/:id', filmController.getOneFilm);
router.put('/film/:id', filmController.updateFilm);
router.delete('/film/:id', filmController.deleteFilm);

module.exports = router;