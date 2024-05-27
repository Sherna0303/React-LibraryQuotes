import { useState } from 'react';
import { Copy } from '../models/copy.model';

export const useCart = () => {
  const [cart, setCart] = useState<Copy[]>([]);

  const addToCart = (copy: Copy) => {
    const existingItem = cart.find(item => item.copyId === copy.copyId);
    copy.quantity = 1;

    if (existingItem) {
      return;
    }

    setCart([...cart, copy]);
  };

  const removeFromCart = (copyId: number) => {
    setCart(cart.filter(copy => copy.copyId !== copyId));
  };

  const increaseQuantity = (copyId: number) => {
    const updatedCart = cart.map(copy => {
      if (copy.copyId === copyId) {
        copy.quantity += 1;
      }
      return copy;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (copyId: number) => {
    const updatedCart = cart.map(copy => {
      if (copy.copyId === copyId && copy.quantity > 1) {
        copy.quantity -= 1;
      }
      return copy;
    });
    setCart(updatedCart);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  };
};
