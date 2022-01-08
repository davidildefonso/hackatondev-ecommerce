import Product from "../db/models/Product";
import { ProductEntry } from "../types";

const getAll = async () :  Promise<ProductEntry[]> => {	
	const products =  await Product.find({});
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return products;
};

const getSingle = async (id: string) : Promise<ProductEntry> => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const product = await Product.findById(id);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return product;
};


const service = {
	getAll, 
	getSingle
};

export default service;