/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import productService from '../services/productService';

const router = express.Router();

router.get('/', async (_req, res) => {	
	const products = await productService.getAll();
	res.json(products);
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;		
	const product = await productService.getSingle(id);
	res.json(product);
});

export default router;