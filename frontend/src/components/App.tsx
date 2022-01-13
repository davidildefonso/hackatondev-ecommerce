/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, {  useEffect, useState  } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import Cart from './Cart';
import Product from './Product';
import { Routes, Route, useMatch } from "react-router-dom";
import { useResource } from "../hooks";
import { CartContext } from '../context/cart';
import { useLocation } from 'react-router-dom';

const App = () =>  {

	const [ products, productService, isLoading ] = useResource(`api/products`);
	const [cartItems, setCartItems] = useState([]);
	const [productsToshow, setProductsToShow] = useState([]);
	const [skippedCount, setSkippedCount] = useState(0);
	const [fetched, setFetched] = useState(false);
	
	
	
	useEffect(() => {	
		if(!fetched && !isLoading )	{		
			setFetched(false);		
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			productService.getAllSkip(skippedCount);
		
		}

			
	}, []);	
	
	const match = useMatch('/product/:id');



	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const product  = match 
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		? productsToshow.find((product: { _id: string; }) => product._id === match.params.id)
		: null;

	const props = {  productsToshow };


	useEffect(() => {	
	
		setSkippedCount(skippedCount + 6);
		if(  products && products.length  > 0   ){	
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument	
			setProductsToShow(productsToshow.concat(products));			
			setFetched(true);
		}
	}, [products]);

	const location = useLocation();

	useEffect(() => {

		if(location.pathname !== "/") return;	

		const onScroll = function () {
			if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {				
				void productService.getAllSkip(skippedCount);
				window.scrollTo({
					top:   window.scrollY/2, 
					behavior: 'smooth'				
				});
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [skippedCount]);





	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>		
				<Navbar  setProductsToShow = {setProductsToShow} />		
				<Routes>
					<Route path="/" element={<Grid  {...props} />} />
					<Route path="cart" element={<Cart />} />				
					<Route path="product/:id" element={<Product  product = {product} />} />
				</Routes>
	
		</CartContext.Provider>

	);


};

export default App;