/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GridItem = (props: { product: any; }) => {

	const product = props.product;
	
	return (	
		<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
			<img src={product.image1} alt="main image " className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">{product.name} </h1>
				<p className="text-gray-700 my-2 hover-text-900 "> {product.productDescription} </p>
			</div>
		</div>
	);

};


export default GridItem;


