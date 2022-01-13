/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, {useEffect, useState, useContext} from "react";
import { useResource } from "../hooks";
import {  useNavigate  } from "react-router-dom";
import { CartContext } from "../context/cart";

const Checkout = (props: { setShowCheckout: any }) => {

	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const [ payment, paymentService, isLoadingPayment ] = useResource(`api/payments`);
	const [ order, orderService, isLoadingOrder ] = useResource(`api/orders`);
	const [paymentInfo, setPaymentInfo] = useState({ success: null, id: null});
	const [showSpinner, setShowSpinner] = useState(false);
	const [attempt, setAttempt] = useState(false);

	const navigate = useNavigate();
	const {  setCartItems } = useContext(CartContext);
 
	const products = JSON.parse(window.localStorage.getItem('cart')).map((p: { id: any; quantity: any; }) =>{
		return { id: p.id,   quantity: p.quantity};
	}) ;	

	const totals = JSON.parse(window.localStorage.getItem('totals')) ;

	const newOrder ={ 
		products ,
		date: new Date(),
		email: "example@xample.com" ,
		status: "created",
		amount: totals.total
	};	

	const closeForm = () => {		
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		props.setShowCheckout(false);
	};

	const processPayment = async (e: { preventDefault: () => void; }) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		e.preventDefault();
		setAttempt(true);
	
		await orderService.create(newOrder);
	};

	

	useEffect(() => {	
		if(order && order.length > 0){
			const newPayment = { 
				date: new Date(),
				orderId : order[0].id ,
				email: newOrder.email ,
				success: true,
				transactionID: `p-a132a-${new Date()}`,
				amount: newOrder.amount
			};

			const getPayment = async (data: unknown) => {
				await paymentService.create(data);
			};
			
			void getPayment(newPayment);
		}
	

	}, [order]);

	


	useEffect(() => {		
		if(payment && payment.length > 0){
			setPaymentInfo({success: true, id: payment[0].id});	
		}else{
			setPaymentInfo({success: false, id: null});
		}
	
	}, [payment]);

	

	useEffect(() => {
		if(isLoadingOrder) setShowSpinner(true);
	}, [isLoadingOrder]);

	useEffect(() => {
		if(!isLoadingPayment && showSpinner) setShowSpinner(false);
	}, [isLoadingPayment]);

	const clearCart = () => {
		window.localStorage.removeItem('cart');
		window.localStorage.removeItem('totals');
		setCartItems([]);
		navigate("/");
	};


	return (
	<div className="absolute top-0 right-0 w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700  max-w-xl" >

		{showSpinner && <div className=" flex flex-col  space-y-8 justify-center items-center h-screen"> 	
				<div> Processing... </div>			
				<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
			</div>}

		{!showSpinner && attempt &&  <div className="bg-white p-6  md:mx-auto h-screen">
			<svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
				<path fill="currentColor"
					d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
				</path>
			</svg>
			<div className="text-center ">
				<h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>				
				<p className="text-gray-600 my-2">Thank you for completing your secure online payment.</p>
				<p className="text-gray-600 my-2">Payment id: {paymentInfo.id} </p>
				<p className="text-gray-600 my-2">We sent you an email with the delivery details </p>
				<p> Have a great day!  </p>
				<div className="py-10 text-center">
					<button onClick={clearCart} className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
						GO BACK 
					</button>			
				</div>
			</div>
		</div>}

		{!showSpinner && !attempt && <>
		
			<div className="mb-10">
				<h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
			</div>
			<div className="mb-3 flex -mx-2">
				<div className="px-2">
					<label htmlFor="type1" className="flex items-center cursor-pointer">
						<input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked/>
						<img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3"/>
					</label>
				</div>         
			</div>
			<div>
				<form onSubmit={processPayment}>
					<div className="mb-3">
						<label className="font-bold text-sm mb-2 ml-1">Name on card</label>
						<div>
							<input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text"/>
						</div>
					</div>
					<div className="mb-3">
						<label className="font-bold text-sm mb-2 ml-1">Card number</label>
						<div>
							<input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text"/>
						</div>
					</div>
					<div className="mb-3 -mx-2 flex items-end">
						<div className="px-2 w-1/2">
							<label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
							<div>
								<select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
									<option value="01">01 - January</option>
									<option value="02">02 - February</option>
									<option value="03">03 - March</option>
									<option value="04">04 - April</option>
									<option value="05">05 - May</option>
									<option value="06">06 - June</option>
									<option value="07">07 - July</option>
									<option value="08">08 - August</option>
									<option value="09">09 - September</option>
									<option value="10">10 - October</option>
									<option value="11">11 - November</option>
									<option value="12">12 - December</option>
								</select>
							</div>
						</div>
						<div className="px-2 w-1/2">
							<select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
								<option value="2028">2028</option>
								<option value="2029">2029</option>
							</select>
						</div>
					</div>
					<div className="mb-10">
						<label className="font-bold text-sm mb-2 ml-1">Security code</label>
						<div>
							<input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text"/>
						</div>
					</div>
					<div>
						<button  className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAY NOW</button>
					</div>
					<div className="mt-2" >
						<button onClick={closeForm} className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> CANCEL</button>
					</div>
				</form>
			</div>
		</>}
     
      
     
    </div>
	
	);

};


export default Checkout;