/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import orderService from '../services/orderService';

const router = express.Router();

router.get('/', async (_req, res) => {	
	const orders = await orderService.getAll();
	res.json(orders);
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;		
	const order = await orderService.getSingle(id);
	res.json(order);
});

router.post('/', async (req, res) => {
	const order = req.body;	
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const orderCreated =  await orderService.create(order);
	res.json({ id: orderCreated.toString() });
});

export default router;