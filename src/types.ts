import { ObjectId } from 'mongodb';


interface CartProduct{
	productId : string
	quantity: number
}

export interface Order {
	_id: ObjectId
	products: Array <CartProduct>
	date: Date
	email: string
	status: string
	updateDate?: Date
	amount : number
}


export interface Payment {
	_id: ObjectId
	date: Date
	orderId: string
	email: string
	success: boolean
	transactionID?: string
	amount: number
}


export interface Product {
	_id: ObjectId
	name: string
	code: string
	brand: string
	price: number
	currency: string
	productBullets: [string]
	productDescription: string
	category: string
	colors: [string],
	sizes: string
	productWeight: number
	weightUnit: string
	productLength: number
	lengthUnit:  string
	ProductWidth: number
	ProductHeight:  number
	PackageWeight: number
	PackageLength: number
	PackageWidth: number
	PackageHeight: number
}