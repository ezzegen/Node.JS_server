const Router = require('express');
const genreController = require('../controller/genre.controller');

const router = new Router();

router.post('/genre', genreController.createGenre);
router.get('/genre', genreController.getGenres);
router.get('/genre/:id', genreController.getOneGenre);
router.put('/genre/:id', genreController.updateGenre);
router.delete('/genre/:id', genreController.deleteGenre);

module.exports = router;