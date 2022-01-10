import { ObjectId } from 'mongodb';
import {  getDatabase, closeConnectionDb, connectDb } from '../db/mongoConnection';

const getAll = async () => {	
	await connectDb();	
	const database =  getDatabase();
	const products =   await database.collection("products").find({}).limit(20).toArray();
	await closeConnectionDb();
	return products;
};

const getSingle = async (id: string)  => {
	await connectDb();	
	const database =  getDatabase();
	const product =   await database.collection("products").findOne({ _id: new ObjectId(id)});
	await closeConnectionDb();
	return product;
};

const getFiltered = async (query : string) => {
	await connectDb();	
	const database =  getDatabase();
	const products = database.collection("products");
	const filteredProducts = await products.aggregate([{
		$search: {
			index: 'default',
			text: {
				query,
				path: "brand"
			}
		}
	}]).toArray();
	await closeConnectionDb();
	return filteredProducts;
};

const service = {
	getAll, 
	getSingle,
	getFiltered
};

export default service;