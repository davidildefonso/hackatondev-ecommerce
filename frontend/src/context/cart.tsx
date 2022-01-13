/* eslint-disable @typescript-eslint/no-explicit-any */

import {   createContext } from 'react';

const context : any = {
	cart: []
};

export const CartContext = createContext(context.cart);
