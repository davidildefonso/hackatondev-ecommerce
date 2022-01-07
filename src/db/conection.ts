
import config from '../config/config';
import { MongoClient } from  "mongodb";

const { username, password, database } = config;

const uri =
  `mongodb+srv://${username}:${password}@cluster0.r0mb0.mongodb.net/${database}?retryWrites=true&w=majority`;

let _db : MongoClient;

const client = new MongoClient(uri);

const connection =  async() => {
    if(_db) {
        return _db;
    } else {
		try {
			_db = await client.connect();	
			return _db;
		} catch (error) {
			return error;
		}
        
    }
};

export default connection;