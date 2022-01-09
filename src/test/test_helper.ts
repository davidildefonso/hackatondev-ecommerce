/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {  getDatabase } from '../db/mongoConnection';


export const initialProducts = [
  {
    name: 'Reloj US Polo Asnn Casual US9281',
	code: 'RPOLO9281',
	brand: 'US Polo',
	price: 350,
	currency: 'USD',
	productBullets: ["Imported","Analog-digital","Metal and Caucho","Diameter 44mm","not water-resistant","model US9281","Black"],
	productDescription: "Reloj casual de metal y caucho de color negro modelo US9281",
	category: "Men",
	colors: ["black", "silver", "gold"],
	sizes: "universal",
	productWeight: 200,
	weightUnit: "grams",
	productLength: 20,
	lengthUnit: "centimeters",
	ProductWidth: 8,
	ProductHeight:  4,
	PackageWeight: 350,
	PackageLength: 15,
	PackageWidth: 10,
	PackageHeight: 10
  },
  {
    name: 'Cartera Guess MishkaG',
	code: 'CGUESS461',
	brand: 'Guess',
	price: 450,
	currency: 'USD',
	productBullets: ["Imported","Leather","Front Logo & plaque","3 containers","interior cover","zipped closure","Long wire", "exterior pocket"],
	productDescription: "Exclusive Guess purse  long belt dusty mauve leather ",
	category: "Women",
	colors: ["black"],
	sizes: "universal",
	productWeight: 380,
	weightUnit: "grams",
	productLength: 50,
	lengthUnit: "centimeters",
	ProductWidth: 15,
	ProductHeight:  30,
	PackageWeight: 550,
	PackageLength: 60,
	PackageWidth: 25,
	PackageHeight: 25
  }
];



export const nonExistingId = async ()  => {

	const product   =   {
		name: 'Cartera Guess MishkaG',
		code: 'CGUESS461',
		brand: 'Guess',
		price: 450,
		currency: 'USD',
		productBullets: ["Imported","Leather","Front Logo & plaque","3 containers","interior cover","zipped closure","Long wire", "exterior pocket"],
		productDescription: "Exclusive Guess purse  long belt dusty mauve leather ",
		category: "Women",
		colors: ["black"],
		sizes: "universal",
		productWeight: 380,
		weightUnit: "grams",
		productLength: 50,
		lengthUnit: "centimeters",
		ProductWidth: 15,
		ProductHeight:  30,
		PackageWeight: 550,
		PackageLength: 60,
		PackageWidth: 25,
		PackageHeight: 25
	};
	


	const database =  getDatabase();
	const products = database.collection("products");
	const result = await products.insertOne(product);
	const id = result.insertedId;
	await products.deleteOne({ _id: id});
	return id;
};

export const productsInDb = async () => {
	const database =  getDatabase();
	const products =   await database.collection("products").find({}).toArray();	
	return products;
};


export const getOrders = async () => {
	const database =  getDatabase();
	const order  =   await database.collection("orders").find({}).toArray();	
	return order;
};

