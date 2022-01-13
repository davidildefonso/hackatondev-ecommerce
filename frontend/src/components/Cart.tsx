/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect , useContext } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../context/cart";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Cart = () => {

	const [totals, setTotals] = useState({ total: 0, tax: 0});
	const [showCheckout, setShowCheckout] = useState(false);
	const [products, setProducts] = useState(null);	
	const cart = window.localStorage.getItem('cart') ;	
	const {  setCartItems } = useContext(CartContext);

	useEffect(() => {
		if(cart){
			setProducts(JSON.parse(cart).map((p: any) => {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-return			
				return {	
						...p, 
						subTotal: (Number(p.details.price) * Number(p.quantity)).toFixed(2)
					};
			}));

		
		}
	}, []);


	useEffect(() => {
		
		if(products){
			const newTotal =  products.reduce((a: any, v: { subTotal: any; }) => Number(a) + Number(v.subTotal), 0 ) ;
			setTotals( (old) => {

				window.localStorage.setItem(
					'totals', JSON.stringify({...old,
						// eslint-disable-next-line @typescript-eslint/no-unsafe-return
						total: newTotal ,
						tax: (0.08 * newTotal) 
					})
				); 

				return {...old,
					// eslint-disable-next-line @typescript-eslint/no-unsafe-return
					total: newTotal ,
					tax: (0.08 * newTotal) 
				};
			
			} );

			window.localStorage.setItem(
				'cart', JSON.stringify(products)
			); 

			setCartItems( products);
		
		}

	
		
	}, [products]);

	const updateQuantity = (id: React.Key, {value}: EventTarget & HTMLInputElement) => {

		if(Number(value) < 1){
			return;
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		setProducts(products.map((p: { id: React.Key; details: { price: any; }; }) => p.id === id
			? {  	...p, 
					quantity: value,
					subTotal: (Number(p.details.price) * Number(value)).toFixed(2) 
					
			} 
			: p));
		
	};


	const removeFromCart = (id: React.Key) => {	

		setProducts(products.filter((p: { id: React.Key; }) => p.id !== id));
	};



	return (	
		<div>
			<div className="flex-1">
				<table className="w-full text-sm lg:text-base" cellSpacing="0">
					<thead>
					<tr className="h-12 uppercase">
						<th className="hidden md:table-cell"></th>
						<th className="text-left">Product</th>
						<th className="lg:text-right text-left pl-5 lg:pl-0">
						<span className="lg:hidden" title="Quantity">Qtd</span>
						<span className="hidden lg:inline">Quantity</span>
						</th>
						<th className="hidden text-right md:table-cell">Unit price</th>
						<th className="text-right">Total price</th>
					</tr>
					</thead>
					<tbody>
					{(products )
						? products.map((item: { id: React.Key; subTotal:number; quantity: number; details: {  imageMainMini: string; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal; }; }) => 
									<tr  key = {item.id} >
										<td className="hidden pb-4 md:table-cell">
											<a href="#">
												<img src={item.details.imageMainMini} className="w-20 rounded" alt="Thumbnail"/>
											</a>
										</td>
										<td>
											<a href="#">
												<p className="mb-2 md:ml-4">{item.details.name}</p>										
												<button onClick={() =>  removeFromCart(item.id)} className="text-gray-700 md:ml-4">
													<small>(Remove item)</small>
												</button>
											
											</a>
										</td>
										<td className="justify-center md:justify-end md:flex mt-6">
											<div className="w-20 h-10">
												<div className="relative flex flex-row w-full h-8">
													<input type="number" value={item.quantity} onChange={({target}) => updateQuantity(item.id, target) }
													className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
													</div>
											</div>
										</td>
										<td className="hidden text-right md:table-cell">
											<span className="text-sm lg:text-base font-medium">
												{item.details.price} $
											</span>
										</td>
										<td className="text-right">
										<span className="text-sm lg:text-base font-medium">
											{ item.subTotal } $
										</span>
										</td>
									</tr> 
						)
						: null
					}		
				
					</tbody>
				</table>
				<hr className="pb-6 mt-6"/>
				<div className="my-4 mt-6 -mx-2 lg:flex">
					<div className="lg:px-2 lg:w-1/2">
					
					<div className="p-4 mt-6 bg-gray-100 rounded-full">
						<h1 className="ml-2 font-bold uppercase">Instruction for seller</h1>
					</div>
					<div className="p-4">
						<p className="mb-4 italic">If you have some information for the seller you can leave them in the box below</p>
						<textarea className="w-full h-24 p-2 bg-gray-100 rounded"></textarea>
					</div>
					</div>
					<div className="lg:px-2 lg:w-1/2">
					<div className="p-4 bg-gray-100 rounded-full">
						<h1 className="ml-2 font-bold uppercase">Order Details</h1>
					</div>
					<div className="p-4">
						
						<div className="flex justify-between border-b">
							<div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
							Subtotal
							</div>
							<div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
							{totals.total.toFixed(2)} $
							</div>
						</div>				
						
							
							<div className="flex justify-between pt-4 border-b">
								<div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
									Tax
								</div>
								<div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
									{totals.tax.toFixed(2)} $
								</div>
							</div>
							<div className="flex justify-between pt-4 border-b">
								<div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
									Total
								</div>
								<div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
									{(totals.total + totals.tax).toFixed(2)} $
								</div>
							</div>
						<a href="#">
							<button  disabled = {products && products.length === 0 ? true: false}   onClick={() => setShowCheckout(true)} className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none">
							<svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
							<span className="ml-2 mt-5px">Procceed to checkout</span>
							</button>
						</a>
					</div>
					</div>
				</div>
			</div>
			{showCheckout && <Checkout setShowCheckout={setShowCheckout} /> }
			
		</div>
	
	);

};


export default Cart;


