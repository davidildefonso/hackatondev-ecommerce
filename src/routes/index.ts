import express from 'express';
const router = express.Router();

router.get('/', ( _, res) => {
	console.log('someone ping here');
	res.send('pong');
});

export default router;