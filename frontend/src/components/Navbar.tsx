/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";
import { useResource } from "../hooks";
import { useDebounce } from "../hooks/useDebounce";

const Navbar = (props :  { setProductsToShow: (arg0: any) => void  }) => {

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [ products, productService ] = useResource(`api/products`);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const { cartItems } = useContext(CartContext);
	const [value, setValue] = useState("");
	

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [itemsCount, setItemsCount] = useState(cartItems.length);

	useEffect(() => {
		setItemsCount(cartItems.length);
	}, [cartItems]);

	useEffect(() => {
		const cart = window.localStorage.getItem('cart') ;		
		if(cart){	
			setItemsCount(JSON.parse(cart).length);
		}else{
			setItemsCount(cartItems);
		}		
	}, []);	


	useDebounce(
        () => {
			if(value && value !== ""){
				// eslint-disable-next-line @typescript-eslint/no-floating-promises
				productService.getFiltered(value);
			}
        }, 
        500, 
        [value]
    );	


	useEffect(() => {
		if(products && products.length > 0){
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			props.setProductsToShow(products);
		}
	}, [products]);


	return (	
		<div className="z-10 fixed w-screen flex flex-row items-center p-1 justify-between bg-white shadow-xs border-b border-gray-200">
			<div className="ml-8 text-lg text-gray-700 hidden md:flex">PAINTINGS</div>
			<span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
				<input  onChange={(e) => setValue(e.target.value)} type="search" name="serch" placeholder="Search"
				className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"/>
				<div className="grid place-items-center h-full w-12 text-black-300">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
			</span>
			<div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
				<i className="fas fa-bars"></i>
			</div >
			<div className="flex flex-row-reverse mr-8 hidden md:flex">
					<Link className="grid-item" to={`cart`}>
						<div className="relative" >
							<div>
								<svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>	
							</div>
							<div className="absolute -bottom-1 -right-1 flex justify-center items-center content-center bg-gradient-to-br from-red-300 to-red-600 shadow-md hover:shadow-lg h-4 w-4 rounded-full fill-current text-white text-sm">
								{itemsCount}
							</div>
						</div>
						
					</Link>
				
			</div>
		</div>
	);

};


export default Navbar;


