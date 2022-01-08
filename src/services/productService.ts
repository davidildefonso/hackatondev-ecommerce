import { ObjectId } from 'mongodb';
import {  getDatabase, closeConnectionDb } from '../db/mongoConnection';

const getAll = async () => {	
	const database =  getDatabase();
	const products =   await database.collection("products").find({}).toArray();
	await closeConnectionDb();
	return products;
};

const getSingle = async (id: string)  => {
	const database =  getDatabase();
	const product =   await database.collection("products").findOne({ _id: new ObjectId(id)});
	await closeConnectionDb();
	return product;
};

const getFiltered = async (query : string) => {
	const database =  getDatabase();
	const products = database.collection("products");
	const filteredProducts = await products.aggregate([{
		$search: {
			index: 'default',
			text: {
				query,
				path: "name"
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