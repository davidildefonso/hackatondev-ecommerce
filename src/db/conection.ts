
import config from '../config/config';
import mongoose from 'mongoose';

const { username, password, database } = config;

const uri =
  `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;


export const connect =  async () => {
	try {
		await mongoose.connect(uri);
		console.log('connected to MongoDB');
		return mongoose.connection;
	} catch (error) {
		if(error instanceof Error){
			console.error('error connecting to MongoDB:', error.message);
		}
	}

};

export const closeConnection = async () =>
	await mongoose.connection.close();
