import express from 'express';
import {
  getMovies, getMovie, getMovieReviews
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res,next) => {
  getMovies().then(movies => res.status(200).send(movies))
  .catch((error) => next(error));;
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovie(id).then(movie => res.status(200).send(movie))
  .catch((error) => next(error));;
});


router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

export default router;