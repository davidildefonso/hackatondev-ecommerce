/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import testService from '../services/testService';

const router = express.Router();

router.get('/search', async (_req, res) => {	
	const films =  await testService.getFiltered();
	res.json(films);
});

router.get('/search/:query', async (req, res) => {
	const query = req.params.query;
	const films =  await testService.filteredFilms(query);
	res.json(films);
});


export default router;