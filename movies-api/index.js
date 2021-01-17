import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import actorsRouter from './api/actors';
import tvShowsRouter from './api/tvShows';
import usersRouter from './api/users';
import genresRouter from './api/genres';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from './authenticate';
import {loadUsers, loadMovies, loadActors, loadTvShows} from './seedData';
import './db';

dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

if (process.env.SEED_DB) {
  loadUsers();
  loadMovies();
  loadActors();
  loadTvShows();
}

// if (process.env.SEED_DB === 'true' && process.env.NODE_ENV === 'development') {
//   loadUsers();
// }

const app = express();
const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

// initialise passport​
app.use(passport.initialize())

//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static('public'));

// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/actors', passport.authenticate('jwt', {session: false}), actorsRouter);
app.use('/api/tvshows', passport.authenticate('jwt', {session: false}), tvShowsRouter);

app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use(errHandler);

let server = app.listen(port, () => {
  console.info(`Server running at ${port}`);
});

module.exports = server;