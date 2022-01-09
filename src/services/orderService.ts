import {  ObjectId  } from 'mongodb';
import {  getDatabase, closeConnectionDb } from '../db/mongoConnection';
import { Order } from '../types';

const getAll = async () => {	
	const database =  getDatabase();
	const orders =   await database.collection("orders").find({}).toArray();
	await closeConnectionDb();
	return orders;
};

const getSingle = async (id: string)  => {
	const database =  getDatabase();
	const order =   await database.collection("orders").findOne({ _id: new ObjectId(id)});
	await closeConnectionDb();
	return order;
};


const create = async (obj : Order) => {
	const database =  getDatabase();
	const products = database.collection("orders");	
	const result = await products.insertOne(obj);
	return result.insertedId;
};

const service = {
	getAll, 
	getSingle,
	create
};

export default service;