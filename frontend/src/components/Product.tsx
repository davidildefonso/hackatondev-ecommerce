/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {useState , useContext} from "react";
import { CartContext } from "../context/cart";
import {  useNavigate  } from "react-router-dom";

const Product = (props: { product: any }) => {

	const [quantity, setQuantity] = useState(1);
	const {  setCartItems } = useContext(CartContext);
	const [slideImage, setSlideImage]  = useState(props.product.imageMain);
	const navigate = useNavigate();

	const addToCart = () => {	
		const id = props.product._id;	
		const cart = window.localStorage.getItem('cart') ;	
		const newItem = { id , quantity, details: props.product };
		if(cart){
	
			if(JSON.parse(cart).some((item: { id: string; quantity: number }) => item.id === id)){
				window.localStorage.setItem(
					'cart', JSON.stringify(JSON.parse(cart).map((item : { id: string; quantity: number }) => item.id === id ? newItem : item ))
				); 

			}else{
				window.localStorage.setItem(
					'cart', JSON.stringify([...JSON.parse(cart),newItem ])
				); 
			}
		}else{
			window.localStorage.setItem(
				'cart', JSON.stringify([{ id , quantity , details: props.product }])
			); 
		}

		
		setCartItems(  JSON.parse(window.localStorage.getItem('cart') ));
	
	};


	const addToCartAndViewCart = () => {
		addToCart();
		navigate("/cart");
		
	};

	const increaseQuantity = () => {
		setQuantity(quantity + 1);
	};

	const decreaseQuantity = () => {
		if(quantity > 0) setQuantity(quantity - 1);
	};


	return (	
		<div className = "flex ">
			<section className="mx-auto max-w-2xl">
				<h2 className="text-4xl text-center tracking-wide font-extrabold font-serif leading-loose mb-2">{props.product.name}</h2>
				<div className="shadow-2xl relative">
			
				<div className=" ">
					<div className=" w-full object-cover">
						<img className="" src={slideImage} alt=""/>
		
					</div>
				</div>	
			
			
				<div className="text-center text-white font-light tracking-wider bg-gray-800 py-2">
					<p id="caption">
						{props.product.productDescription}
					</p>
				</div>

			
				<div className="flex">
					<div  onClick={() => setSlideImage(props.product.imageMain)} >
						<img className=" description h-24 opacity-50 hover:opacity-100 cursor-pointer" src={props.product.imageMainMini} alt="Dog's Nose"/>
					</div>
					<div onClick={() => setSlideImage(props.product.image1)} >
						<img className=" description h-24 opacity-50 hover:opacity-100 cursor-pointer" src={props.product.image1Mini}  alt="Lawnmower"/>
					</div>
					<div onClick={() => setSlideImage(props.product.image2)}  >
						<img className=" description h-24 opacity-50 hover:opacity-100 cursor-pointer" src={props.product.image2Mini}  alt="Globe"/>
					</div>
					<div onClick={() => setSlideImage(props.product.image3)}  >
						<img className=" description h-24 opacity-50 hover:opacity-100 cursor-pointer" src={props.product.image3Mini}  alt="Optical Illusion"/>
					</div>
				
				</div>
				</div>
			</section>

			<div className="flex flex-col">				
				<div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
					<h3 className="text-gray-700 uppercase text-lg"> {props.product.name} </h3>				
					<div className="w-full flex-grow">
						<h2 className="text-center font-bold uppercase mb-4"> {props.product.brand} </h2>
						<h3 className="text-center font-bold text-4xl md:text-5xl mb-5">$ {props.product.price} <span className="text-sm">/mo</span></h3>
						<ul className="text-sm mb-8">
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {props.product.productBullets[0]}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {props.product.productBullets[1]}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {props.product.productBullets[2]}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {props.product.productBullets[3]}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> {props.product.productBullets[4]}</li>
						</ul>
					</div>
					<hr className="my-3"/>
					<div className="mt-3">
						<label className="text-gray-700 text-sm" htmlFor="count">Color: {props.product.colors[0]} </label>
					
					</div>
					<div className="mt-2">
						<label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
						<div className="flex items-center mt-1">
							<button  onClick={increaseQuantity} className="text-gray-500 focus:outline-none focus:text-gray-600">
								<svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
							</button>
							<span className="text-gray-700 text-lg mx-2"> {quantity} </span>
							<button onClick={decreaseQuantity}  className="text-gray-500 focus:outline-none focus:text-gray-600">
								<svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
							</button>
						</div>
					</div>
					
					<div className="flex items-center mt-6">
						<button  onClick={addToCartAndViewCart} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
						<button onClick={addToCart} className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
							<svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
						</button>
					</div>


					<div className="w-full flex-grow mt-24">
					
						<ul className="text-sm mb-8">
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Material:  {props.product.material}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Theme:  {props.product.theme}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Category: {props.product.category}</li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Dimensions: {props.product.productLength} x {props.product.ProductHeight} x {props.product.ProductWidth}  {props.product.lengthUnit}  </li>
							<li className="leading-tight"><i className="mdi mdi-check-bold text-lg"></i> Weight:  {props.product.productWeight} {props.product.weightUnit}  </li>
						</ul>
					</div>


				</div>
			</div>
		</div>
	
		
	);

};


export default Product;


