/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import axios from 'axios';

interface Service{
    create: (newObject: unknown) => Promise<void>;
    update: (id: unknown, newObject: unknown) => Promise<void>;
    getAll: () => Promise<void>;
	getSingle: (id: unknown) => Promise<void>;
	getFiltered:  (str: string) => Promise<void>;
	getAllSkip: (skip: number) => Promise<void>;
}

interface Resource{
	_id: string;
	resources: Array<any>
	service: Service
	loading: boolean 
}

export const useResource = (baseUrl: string)  :  [Resource[]  | any, Service, boolean] => {
	const [resources, setResources] = useState([]);
	const [loading, setLoading] = useState(false);

	const service = {
		create : async (newObject: unknown) => {	
			setLoading(true);	
			const response = await axios.post(baseUrl, newObject);
			setResources([...resources].concat(response.data));
			setLoading(false);
		},
		update: async (id: unknown, newObject: unknown) => {
			const response = await axios.put(`${ baseUrl }/${id}`, newObject);
			setResources( [...resources]
				.map(resource => resource.id === id 
					? newObject 
					: response.data) );
		},
		getAll: async () => {
			const response = await axios.get(baseUrl);
			setResources(response.data);
		},
		getAllSkip: async (skip: any) => {
			setLoading(true);	
			const response = await axios.get(`${ baseUrl }/skip/${skip}`);
			setResources(response.data);
			setLoading(false);
		},
		getSingle: async (id: unknown ) => {
			const response = await axios.get(`${ baseUrl }/${id}` );
			setResources(response.data);
		},
		getFiltered: async (str: string,) => {
			const response = await axios.get(`${ baseUrl }/search/${str}`);
			setResources(response.data);
		} 
	};

	return [
		resources, service, loading
	];
};
