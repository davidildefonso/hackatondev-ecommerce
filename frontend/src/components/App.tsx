/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import React, {  useEffect, useState  } from 'react';
import Navbar from './Navbar';
import Grid from './Grid';
import Cart from './Cart';
import Product from './Product';
import { Routes, Route, useMatch } from "react-router-dom";
import { useResource } from "../hooks";
import { CartContext } from '../context/cart';

const App = () =>  {

	const [ products, productService ] = useResource(`api/products`);
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {		
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		productService.getAll();		
	}, []);	


	const match = useMatch('/product/:id');

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const product  = match 
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		? products.find((product: { _id: string; }) => product._id === match.params.id)
		: null;

	const props = {  products };

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>		
				<Navbar/>		
				<Routes>
					<Route path="/" element={<Grid  {...props} />} />
					<Route path="cart" element={<Cart />} />				
					<Route path="product/:id" element={<Product  product = {product} />} />
				</Routes>
	
		</CartContext.Provider>

	);


};

export default App;