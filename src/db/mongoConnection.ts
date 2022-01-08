
import config from '../config/config';
import { MongoClient }  from 'mongodb';

const { username, password, database } = config;

class DbClient {

    static instance: MongoClient;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public constructor() {}

    public static getInstance(): MongoClient {
        if (!this.instance) {
			const uri =
				`mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;

            this.instance = new MongoClient(uri);
        }
        return this.instance;
    }
}

export const connectDb =  async () => {
	try {
		const mongoClient = DbClient.getInstance();
		const client = await mongoClient.connect();
		console.log('connected to MongoDB');
		return client;
	} catch (error) {
		if(error instanceof Error){
			console.error('error connecting to MongoDB:', error.message);
		}
	}
};

export const closeConnectionDb = async () => {
	const mongoClient = DbClient.getInstance();
	const client = await mongoClient.connect();
	await client.close();
};
	
export const getDatabase =  () => {
	const mongoClient = DbClient.getInstance();
	return mongoClient.db(database);
};