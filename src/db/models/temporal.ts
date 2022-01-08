import  mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  plot: {
    type: String,
   
  },
  title: {
	type: String,
	
  },
  fullplot: {
    type: String,

  },
  num_mflix_comments: {
    type:  Number,
    
  },
  released: {
    type: Date,
  
  },
  genres: {
    type: [String],

  },
  rated: {
    type: String,
  
  },
  type: {
    type: String,
   
  },
  cast: {
    type:  [String],
   
  },
  countries: {
    type:  [String],
   
  },
  awards: {
	wins: { type: Number },
	nominations: { type: Number },
	text: { type: String }

  },
  year: {
    type:  Number,
  
  },
  imdb:  {
	rating: { type: Number },
	votes: { type: Number },
	id: { type: String }

  }, 
  tomatoes: {
    lastUpdated: { type: Date },
	viewer: {
		rating: { type: Number },
		numReviews: { type: Number },
		meter: { type: Number }
	}
  }
},  {collection: 'movies'});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;

