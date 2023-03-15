const db = require('../db');

class FilmController {
    async createFilmGenre(req, res) {
        try {
            const { film_id, genre_id } = req.body;
            const newFg = await db.query(`INSERT INTO film_genre (film_id, genre_id)
                                          VALUES ($1, $2) RETURNING *;`, [film_id, genre_id]);
            res.json(newFg.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFilmsGenres(req, res) {
        try {
            const fg = await db.query(`SELECT *
                                         FROM film_genre;`);

            res.json(fg.rows);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOneFilmGenre(req, res) {
        try {
            const fgId = req.params.id;
            const oneFg = await db.query(`SELECT *
                                            FROM film_genre
                                           WHERE fg_id = $1;`, [fgId]);
            res.json(oneFg.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async updateFilmGenre(req, res) {
        try {
            const fgId = req.params.id;
            const { film_id, genre_id } = req.body;
            const updatedFg = await db.query(`UPDATE film_genre
                                                 SET film_id = $1,
                                                     genre_id = $2
                                               WHERE fg_id = $3
                                           RETURNING *;`, [film_id, genre_id, fgId]);
            res.json(updatedFg.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteFilmGenre(req, res) {
        try {
            const fgId = req.params.id;
            const delFg = await db.query(`DELETE FROM film_genre
                                           WHERE fg_id = ($1)
                                       RETURNING *;`, [fgId]);

            res.json(delFg.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new FilmController();