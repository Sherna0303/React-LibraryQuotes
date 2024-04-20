import { Copy } from '../models/copy.model';

export interface CartState {
  cart: Copy[];
}

export type CartAction = 
  | { type: 'ADD_TO_CART'; copy: Copy }
  | { type: 'REMOVE_FROM_CART'; copyId: number };

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
  case 'ADD_TO_CART':
    return { cart: [...state.cart, action.copy] };
  case 'REMOVE_FROM_CART':
    return { cart: state.cart.filter(copy => copy.copyId !== action.copyId) };
  default:
    return state;
  }
};
