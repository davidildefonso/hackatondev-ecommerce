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
}

interface Resource{
	resources: Array<any>
	service: Service
}

export const useResource = (baseUrl: string)  :  [Resource[], Service] => {
	const [resources, setResources] = useState([]);

	const service = {
		create : async (newObject: unknown) => {			
			const response = await axios.post(baseUrl, newObject);
			setResources([...resources].concat(response.data));
		},
		update: async (id: unknown, newObject: unknown) => {
			const response = await axios.put(`${ baseUrl } /${id}`, newObject);
			setResources( [...resources]
				.map(resource => resource.id === id 
					? newObject 
					: response.data) );
		},
		getAll: async () => {
			const response = await axios.get(baseUrl);
			setResources(response.data);
		}
	};

	return [
		resources, service
	];
};
