import { useEffect, useState } from 'react';
import { Copy } from '../core/models/copy.model';
import { copyListService } from '../core/services/copyList.service';
import { useCart } from '../core/hooks/useCart';
import { BudgetList } from '../ui/components/BudgetList';

export const BudgetContainer = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [books, setBooks] = useState<Copy[]>([]);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const booksData = await copyListService();
      setBooks(booksData);
    };
  
    fetchBooks();
  }, []);
  
  return <BudgetList books={books} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>;
};