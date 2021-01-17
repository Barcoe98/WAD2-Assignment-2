import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TvShowSchema = new Schema({
  poster_path: { type: String },
  popularity: { type: String },
  id: { type: Number, required: true, unique: true },
  backdrop_path: { type: String },
  vote_average: { type: Number },
  overview: { type: String },
  first_air_date: { type: String },
  origin_country: [{ type: String }],
  genre_ids: [{ type: Number }],
  original_language: { type: String },
  vote_count: { type: Number },
  name: { type: String },
  original_name: { type: String }
});

TvShowSchema.statics.findByTvShowDBId = function (id) {
  return this.findOne({ id: id });
};

export default mongoose.model('TvShows', TvShowSchema);


