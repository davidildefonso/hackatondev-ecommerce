import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.NODE_ENV === 'TEST' 
	? 	process.env.APP_PORT_TEST 
	:  process.env.NODE_ENV === 'DEVELOPMENT' 
			?	process.env.APP_PORT_DEV 
			:   process.env.PORT  || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});