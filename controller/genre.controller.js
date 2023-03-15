const db = require('../db');

class GenreController {

    async createGenre(req, res) {
        try {
            const { genre_name } = req.body;
            const newGenre = await db.query(`INSERT INTO genre (genre_name)
                                             VALUES ($1) RETURNING *;`, [genre_name]);

            res.json(newGenre.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getGenres(req, res) {
        try {
            const param = req.query;
            if ('film' in param) {
                const genres = await db.query(`SELECT genre_id, genre_name, film_name
                                                 FROM film_genre
                                                 JOIN film USING(film_id)
                                                RIGHT JOIN genre USING(genre_id);`);
                res.json(genres.rows);
            } else {
                const genres = await db.query(`SELECT * FROM genre;`)

                res.json(genres.rows)
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOneGenre(req, res) {
        try {
            const param = req.query;
            if ('film' in param) {
                const genreId = req.params.id;
                const genre = await db.query(`SELECT film_name
                                                FROM film
                                                JOIN film_genre USING(film_id)
                                               RIGHT JOIN genre USING(genre_id)
                                               WHERE genre_id = $1;`, [genreId]);
                res.json(genre.rows);
            } else {
                const genreId = req.params.id;

                const genre = await db.query(`SELECT *
                                                FROM genre
                                               WHERE genre_id = $1`, [genreId]);

                res.json(genre.rows[0]);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateGenre(req, res) {
        try {
            const genreId = req.params.id;
            const { genre_name } = req.body;

            const updatedGenre = await db.query(`UPDATE genre
                                                    SET genre_name = $1
                                                  WHERE genre_id = $2
                                              RETURNING *;`, [genre_name, genreId]);

            res.json(updatedGenre.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteGenre(req, res) {
        try {
            const genreId = req.params.id;

            const delGenre = await db.query(`DELETE FROM genre
                                              WHERE genre_id = $1
                                          RETURNING *;`, [genreId]);

            res.json(delGenre.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new GenreController();
