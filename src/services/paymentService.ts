import {  ObjectId  } from 'mongodb';
import {  getDatabase, closeConnectionDb } from '../db/mongoConnection';
import { Payment } from '../types';

const getAll = async () => {	
	const database =  getDatabase();
	const payments =   await database.collection("payments").find({}).toArray();
	await closeConnectionDb();
	return payments;
};

const getSingle = async (id: string)  => {
	const database =  getDatabase();
	const payment =   await database.collection("payments").findOne({ _id: new ObjectId(id)});
	await closeConnectionDb();
	return payment;
};


const create = async (obj : Payment) => {
	const database =  getDatabase();
	const payments = database.collection("payments");	
	const result = await payments.insertOne(obj);
	return result.insertedId;
};

const service = {
	getAll, 
	getSingle,
	create
};

export default service;