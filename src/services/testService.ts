import Movie from "../db/models/temporal";
import atlasPlugin from 'mongoose-atlas-search';

const getFiltered = async ()  => {	
	console.log("aqui");
	const films =  await Movie.find({}); //.limit(5);
	//eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return films;
};

const filteredFilms = async (str : string) => {

	atlasPlugin.initialize({
		model: Movie,
		overwriteFind: true,
		searchKey: 'search',
		addFields: {
			id: '$_id'
		},
		searchFunction: (query : string) => {			
			return {
				index: 'default',
				text: {
					query,
					path:  "title" // {		'wildcard': '*'		}
				}
			};
		}

	});

	const filteredFilms = await Movie.find({search: str});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return filteredFilms;
};

const service = {
	getFiltered,
	filteredFilms
};

export default service;