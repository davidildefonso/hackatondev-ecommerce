export interface ProductEntry {
	_id: string;
	name: string;
	code: string;
	brand: string;
	price: number;
	currency: string;
	productBullets: Array<string>;
	productDescription: string;
	category: string;
	metaKeywords: Array<string>;
	colors:  Array<string>;
	sizes:  Array<string>;
	productWeight:  Array<number>;
	productLength:  Array<number>;
	ProductWidth:  Array<number>;
	weightUnit: string;
	lengthUnit: string;
	PackageWeight:  Array<number>;
	PackageLength:  Array<number>;
	PackageWidth:  Array<number>;
	PackageHeight:  Array<number>;
}



