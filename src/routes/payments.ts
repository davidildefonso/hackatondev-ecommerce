/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import paymentService from '../services/paymentService';

const router = express.Router();

router.get('/', async (_req, res) => {	
	const payments = await paymentService.getAll();
	res.json(payments);
});

router.get('/:id', async (req, res) => {
	const id = req.params.id;		
	const payment = await paymentService.getSingle(id);
	res.json(payment);
});

router.post('/', async (req, res) => {
	const payment = req.body;	
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	const paymentCreated =  await paymentService.create(payment);
	res.json({ id: paymentCreated.toString() });
});

export default router;