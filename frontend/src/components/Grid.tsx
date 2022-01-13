/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import GridItem from "./GridItem";


const Grid = ( props: {  productsToshow : any } ) => {

	


	if(!props.productsToshow) return null;
	return (
		<div className="flex"  >
			<aside  className="fixed h-screen mt-12 flex-shrink-0 hidden w-40 bg-white border-r dark:border-blue-800 dark:bg-darker md:block">
				<div className="flex flex-col h-full">
				
					<nav aria-label="Main" className="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto">
			
				
					<div className="space-y-4" >
						<div>
							<p  className="font-bold mb-4 pl-2" >BRANDS</p>
							<div>
								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("XIN")} id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-2" className="text-sm ml-3 font-medium text-gray-900">XIN</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Yelash")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Yelash</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Winpeak Art")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Winpeak Art</label>
								</div>
									<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("ULIANUAN")} id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-2" className="text-sm ml-3 font-medium text-gray-900">ULIANUAN</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Diathou")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Diathou</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Barbier")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Barbier</label>
								</div>
									</div>
									<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("pixel")}   id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-2" className="text-sm ml-3 font-medium text-gray-900">pixel</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Kazimierz")}  id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Kazimierz</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input onChange={() => filterBrand("Van Osdol")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">Van Osdol</label>
								</div>
								<div className="flex items-start items-center mb-4">
									<input  onChange={() => filterBrand("All")} id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">All</label>
								</div>
							
							
						</div>
						<div>
							<p  className="font-bold mb-4 pl-2"  >PRICE</p>
							<div>
								<div className="flex items-start items-center mb-4">
									<input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-2" className="text-sm ml-3 font-medium text-gray-900">0 - 100 $</label>
								</div>

								<div className="flex items-start items-center mb-4">
									<input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">100 - 200 $</label>
								</div>
								<div className="flex items-start items-center mb-4">
									<input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">200 - 300 $</label>
								</div>
								<div className="flex items-start items-center mb-4">
									<input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">300 - 500 $</label>
								</div>
								<div className="flex items-start items-center mb-4">
									<input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"/>
									<label htmlFor="checkbox-3" className="text-sm ml-3 font-medium text-gray-900">  500  - more $  </label>
								</div>
							</div>
							
						</div>
		
        
					
					</div>

				

					</nav>
				</div>
			</aside>

			<div  className="pl-48  bg-gray-100 min-h-screen py-32 px-10 ">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 "> 
					{props.productsToshow.map((product: { _id: React.Key; }) => <GridItem  key={product._id}  product = {product}  />)}
				</div>
			</div>
		</div>
	
	);

};


export default Grid;


