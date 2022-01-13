import { ObjectId } from 'mongodb';
import {  getDatabase, closeConnectionDb, connectDb } from '../db/mongoConnection';

const getAll = async () => {	
	await connectDb();	
	const database =  getDatabase();
	const products =   await database.collection("products").find({}).limit(6).toArray();
	await closeConnectionDb();
	return products;
};

const getAllSkip = async (skipped: number) => {	
	await connectDb();	
	const database =  getDatabase();
	const products =   await database.collection("products").find({}).limit(6).skip(skipped).toArray();
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

const getFiltered = async (query : string | [string]) => {
	await connectDb();	
	const database =  getDatabase();
	const products = database.collection("products");
	const limit = 6;
	const skip = 6;

	const filteredProducts = await products.aggregate([
		{
			$search: {
				index: 'default',
				text: {
					path:["brand", "name"],
					query,
					fuzzy: {}
				}				
			}
		},
		{	
			$skip : skip
		},
		{ 
			$limit: limit 
		}
	]).toArray();
	await closeConnectionDb();
	return filteredProducts;
};

const service = {
	getAll, 
	getSingle,
	getFiltered,
	getAllSkip
};

export default service;