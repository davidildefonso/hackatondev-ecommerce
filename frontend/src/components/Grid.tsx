/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import GridItem from "./GridItem";


const Grid = ( props: {  products : any } ) => {



	if(!props.products) return null;

	return (
		<div className="bg-gray-100 min-h-screen py-32 px-10 ">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 
				{props.products.map((product: { _id: React.Key; }) => <GridItem  key={product._id}  product = {product}  />)}
			</div>
		</div>
	);

};


export default Grid;


