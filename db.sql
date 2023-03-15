DROP TABLE IF EXISTS film CASCADE;
DROP TABLE IF EXISTS genre CASCADE;
DROP TABLE IF EXISTS film_genre CASCADE;


CREATE TABLE film (
       film_id bigint GENERATED ALWAYS AS IDENTITY,
       film_name varchar(50) NOT NULL,
       year_release int NOT NULL CHECK(year_release > 1900 AND year_release < 2030),
	
       CONSTRAINT PK_film_film_id PRIMARY KEY(film_id)
);

CREATE TABLE genre (
       genre_id int GENERATED ALWAYS AS IDENTITY,
       genre_name varchar(50) NOT NULL,
	
       CONSTRAINT PK_genre_genre_id PRIMARY KEY(genre_id)
);


CREATE TABLE film_genre (
       fg_id bigint GENERATED ALWAYS AS IDENTITY,
       film_id bigint NOT NULL,
       genre_id int NOT NULL,
	
       CONSTRAINT PK_film_genre_fg_id PRIMARY KEY(fg_id),
	
       CONSTRAINT FK_film_film_id
       FOREIGN KEY(film_id) REFERENCES film(film_id),
	
       CONSTRAINT FK_genre_genre_id
       FOREIGN KEY(genre_id) REFERENCES genre(genre_id)
);

INSERT INTO film (film_name, year_release)
VALUES ('Зелёная миля', 1999),
       ('Форест Гамп', 1994),
       ('Москва слезам не верит', 1974);
	   
INSERT INTO genre (genre_name)
VALUES ('биография'),
       ('боевик'),
       ('вестерн'),
       ('военный'),
       ('детектив'),
       ('драма'),
       ('комедия'),
       ('мелодрама'),
       ('мультфильм'),
       ('фэнтези'),
       ('приключения'),
       ('семейный'),
       ('триллер'),
       ('ужасы'),
       ('фантастика');

INSERT INTO film_genre (film_id, genre_id)
VALUES (1, 6),
       (1, 8),
       (1, 10),
       (2, 6),
       (2, 7),
       (2, 8),
       (2, 4),
       (3, 6),
       (3, 7),
       (3, 8);












