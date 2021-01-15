import express from 'express';
import {getMovieReviews} from '../tmdb-api';
import movieModel from "./movieModel"
import popularMovieModel from "../popularMovies/popularMovieModel"

const router = express.Router();


router.get('/', ( req, res, next) => {
  popularMovieModel.find().then(popularMovies => res.status(200).send(popularMovies).catch(next));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  popularMovieModel.findByMovieDBId(id).then(popular => res.status(200).send(popular).catch(next));
});

// router.get('/:id/reviews', (req, res, next) => {
//   const id = parseInt(req.params.id);
//   getMovieReviews(id)
//   .then(reviews => res.status(200).send(reviews))
//   .catch((error) => next(error));
// });

export default router;


