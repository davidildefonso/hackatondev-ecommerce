/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React ,  {useEffect} from "react";
import { useResource } from "../hooks";
import GridItem from "./GridItem";

const Grid = () => {

	const [ products, productService ] = useResource(`${process.env.BACKEND_URL}products`);

	useEffect(() => {		
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		productService.getAll();
	}, []);



	console.log(products);

	if(!products) return null;

	return (
		<div className="bg-gray-100 min-h-screen py-32 px-10 ">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 
				{products.map(product => <GridItem  key={product._id}  product = {product}  />)}
			</div>
		</div>
	);

};


export default Grid;


