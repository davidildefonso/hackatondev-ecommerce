
export default class Product  {

	name : string;
	code: string;
	brand: string;
	price: number;
	currency: string;
	productBullets: [string];
	productDescription: string;
	category: string;
	colors: [string];
	sizes: [string];
	weightUnit: string;
	productWeight: number;
	productLength:  number;
	lengthUnit: string;
	ProductWidth:  number;
	ProductHeight: number;
	PackageWeight:  number; 
	PackageLength: number;
	PackageWidth:  number; 
	PackageHeight:  number;

	constructor(
		name : string,
		code: string,
		brand: string,
		price: number,
		currency: string,
		productBullets: [string],
		productDescription: string,
		category: string,
		colors: [string],
		sizes: [string],
		weightUnit: string,
		productWeight: number,
		productLength:  number,
		lengthUnit: string,
		ProductWidth:  number,
		ProductHeight: number,
		PackageWeight:  number, 
		PackageLength: number,
		PackageWidth:  number, 
		PackageHeight:  number
	){
		this.name = name;
		this.code = code;
		this.brand = brand;
		this.price = price;
		this.currency = currency;
		this.productBullets = productBullets;
		this.productDescription = productDescription;
		this.category = category;
		this.colors = colors;
		this.sizes = sizes;
		this.weightUnit = weightUnit;
		this.productWeight = productWeight;
		this.productLength = productLength;
		this.lengthUnit = lengthUnit;
		this.ProductWidth = ProductWidth;
		this.ProductHeight = ProductHeight;
		this.PackageWeight = PackageWeight;
		this.PackageLength = PackageLength;
		this.PackageWidth = PackageWidth;
		this.PackageHeight = PackageHeight;
	}



}
