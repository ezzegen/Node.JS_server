const express = require('express');
const dotenv = require('dotenv');
const filmRouter = require('./routes/film.routes');
const genreRouter = require('./routes/genre.routes');
const filmGenreRouter = require('./routes/film-genre.routes')

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.use('/api', filmRouter);
app.use('/api', genreRouter);
app.use('/api', filmGenreRouter);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}...`));
