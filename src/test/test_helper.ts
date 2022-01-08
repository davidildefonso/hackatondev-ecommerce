/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import  Product  from '../db/models/Product';

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
	metaKeywords: "Reloj US Polo Assn",
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
    name: 'Reloj US Polo Asnn Casual US9625',
	code: 'RPOLO9625',
	brand: 'US Polo',
	price: 300,
	currency: 'USD',
	productBullets: ["Imported","Analog-digital","Metal and Caucho","Diameter 44mm","not water-resistant","model US9281","Black"],
	productDescription: "Reloj casual de metal y caucho de color negro modelo US9281",
	category: "Men",
	metaKeywords: "Reloj US Polo Assn",
	colors: ["black"],
	sizes: "universal",
	productWeight: 220,
	weightUnit: "grams",
	productLength: 18,
	lengthUnit: "centimeters",
	ProductWidth: 8,
	ProductHeight:  4,
	PackageWeight: 330,
	PackageLength: 15,
	PackageWidth: 10,
	PackageHeight: 10
  }
];



export const nonExistingId = async ()  => {

	const product   = new Product({  
		name: 'to be deleted',
		code: 'to be deleted',
		brand: 'to be deleted',
		price: 0,
		currency: 'USD',
		productBullets: ["to be deleted"],
		productDescription: "to be deleted",
		category: "to be deleted",
		metaKeywords: "to be deleted",
		colors: ["to be deleted"],
		sizes: "to be deleted",
		productWeight: 0,
		weightUnit: "to be deleted",
		productLength: 0,
		lengthUnit: "to be deleted",
		ProductWidth: 0,
		ProductHeight:  0,
		PackageWeight: 0,
		PackageLength: 0,
		PackageWidth: 0,
		PackageHeight: 0 
	});
	
	await product.save();
	await product.remove();
	return product._id.toString();
};

export const productsInDb = async () => {
	const products = await Product.find({});
	return products.map(product => product.toJSON());
};



