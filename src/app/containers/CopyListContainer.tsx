import { useEffect, useState } from 'react';
import { useCart } from '../core/hooks/useCart';
import { Copy } from '../core/models/copy.model';
import { copyListService } from '../core/services/copyList.service';
import { CalculateList } from '../ui/components/CalculateList';


export const CopyListContainer = () => {
  const { cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const [books, setBooks] = useState<Copy[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await copyListService();
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  return <CalculateList books={books} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>;
};
