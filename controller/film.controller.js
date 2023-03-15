const db = require('../db');

class FilmController {
    async createFilm(req, res) {
        try {
            const { film_name, year_release } = req.body;
            const newFilm = await db.query(`INSERT INTO film (film_name, year_release)
                                            VALUES ($1, $2) RETURNING *;`, [film_name, year_release]);
            res.json(newFilm.rows);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getFilms(req, res) {
        try {
            if ('genre' in req.query) {
                const films = await db.query(`SELECT film_id, film_name, year_release, genre_name
                                                FROM film_genre
                                               RIGHT JOIN film USING(film_id)
                                                LEFT JOIN genre USING(genre_id);`);
                res.json(films.rows);
            } else {
                const films = await db.query(`SELECT * FROM film;`);

                res.json(films.rows);
            }
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOneFilm(req, res) {
        if ('genre' in req.query) {
            const filmId = req.params.id;
            const film = await db.query(`SELECT genre_name
                                           FROM genre
                                           JOIN film_genre USING(genre_id)
                                          RIGHT JOIN film USING(film_id)
                                          WHERE film_id = $1;`, [filmId]);
            res.json(film.rows);
        } else {
            const filmId = req.params.id;
            const film = await db.query(`SELECT *
                                           FROM film
                                          WHERE film_id = $1;`, [filmId]);
            res.json(film.rows[0]);
        }
    }

    async updateFilm(req, res) {
        try {
            const filmId = req.params.id;
            const { film_name, year_release } = req.body;
            const updatedFilm = await db.query(`UPDATE film
                                                   SET film_name = $1,
                                                       year_release = $2
                                                 WHERE film_id = $3
                                             RETURNING *;`, [film_name, year_release, filmId]);
            res.json(updatedFilm.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async deleteFilm(req, res) {
        try {
            const filmId = req.params.id;
            const delFilm = await db.query(`DELETE FROM film
                                             WHERE film_id = ($1)
                                         RETURNING *;`, [filmId]);
            res.json(delFilm.rows[0]);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

module.exports = new FilmController();
