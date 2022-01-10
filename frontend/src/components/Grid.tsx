import React ,  {useEffect} from "react";
import { useResource } from "../hooks";

const Grid = () => {

	const [ products, productService ] = useResource(`${process.env.BACKEND_URL}products`);

	useEffect(() => {		
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		productService.getAll();
	}, []);



	console.log(products);

	return (
		<div className="bg-gray-100 min-h-screen py-32 px-10 ">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 

			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1627751476653-e954179b174a" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>
			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1572431447238-425af66a273b" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>
			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1540202404-1b927e27fa8b" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>
			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1506790409786-287062b21cfe" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>
			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1505881502353-a1986add3762" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>
			<div className="container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300">
				<img src="https://images.unsplash.com/photo-1544473244-f6895e69ad8b" alt="" className="rounded-t-lg w-full"/>
			<div className="p-6">
				<h1 className="md:text-1xl text-xl hover:text-indigo-600 transition duration-200  font-bold text-gray-900 ">This is Amazing for people to visit.</h1>
			<p className="text-gray-700 my-2 hover-text-900 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.</p>
			</div>
				</div>

				</div>
			</div>
	);

};


export default Grid;


