import express from 'express';
import {getMovieReviews} from '../tmdb-api';
import tvShowModel from "./movieModel"

const router = express.Router();

router.get('/', ( req, res, next) => {
  tvShowModel.find().then(tvShows => res.status(200).send(tvShows).catch(next));
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  tvShowModel.findByTvShowDBId(id).then(tvShow => res.status(200).send(tvShow).catch(next));
});

export default router;


