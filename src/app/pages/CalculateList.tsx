import { useState } from 'react';
import { ICopyList } from '../core/models/copy-list.model';
import { Copy } from '../core/models/copy.model';
import { calculatePriceCopyListService } from '../core/services/calculatePriceCopyList.service';
import { Book } from '../ui/components/Book';
import { Cart } from '../ui/components/Cart';
import { PriceListResponse } from '../ui/components/PriceListResponse';

interface CalculateListProps {
  books: Copy[];
  cart: Copy[];
  addToCart: (copy: Copy) => void;
  removeFromCart: (copyId: number) => void;
  increaseQuantity: (copyId: number) => void;
  decreaseQuantity: (copyId: number) => void;
}

export const CalculateList: React.FC<CalculateListProps> = ({ books, cart, addToCart, removeFromCart,  increaseQuantity, decreaseQuantity}) => {
  const [backendResponse, setBackendResponse] = useState<any>(null);

  const handleClick = () => {
    const copyList: ICopyList[] = cart.map(item => ({
      id: item.copyId,
      amount: item.quantity
    }));

    calculatePriceCopyListService(copyList)
      .then(response => setBackendResponse(response));
  };

  return (
    <div>
      <h1>Bookstore</h1>
      <div>
        {books && books.map(book => (
          <Book key={book.copyId} book={book} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      <button onClick={handleClick}>Calcular</button>
      {backendResponse && <PriceListResponse responseData={backendResponse} />}
    </div>
  );
};