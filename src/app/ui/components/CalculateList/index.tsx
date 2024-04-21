import { useState } from 'react';
import { Copy } from '../../../core/models/copy.model';
import { calculatePriceCopyListService } from '../../../core/services/calculatePriceCopyList.service';
import { Book } from '../Book';
import { Cart } from '../Cart';
import { PriceListResponse } from '../PriceListResponse';
import { Title } from '../../elements/Title';
import { CopyListDetail } from '../../../core/models/copy-list-price-response.model';

interface CalculateListProps {
  books: Copy[];
  cart: Copy[];
  addToCart: (copy: Copy) => void;
  removeFromCart: (copyId: number) => void;
  increaseQuantity: (copyId: number) => void;
  decreaseQuantity: (copyId: number) => void;
}

export const CalculateList: React.FC<CalculateListProps> = ({ books, cart, addToCart, removeFromCart,  increaseQuantity, decreaseQuantity}) => {
  const [backendResponse, setBackendResponse] = useState<CopyListDetail>();

  const handleClick = () => {
    calculatePriceCopyListService(cart)
      .then(response => setBackendResponse(response));
  };

  return (
    <>
      <Title className='main__title' text='Bookstore' type='h1'/>
      <div className='main__copies'>
        {books && books.map(book => (
          <Book key={book.copyId} book={book} addToCart={addToCart} />
        ))}
      </div>
      <div className='main__cart'>
        <Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
      </div>
      <button className='main__button' onClick={handleClick}>Calculate</button>
      <div className='main__result'>
        {backendResponse && <PriceListResponse responseData={backendResponse}/>}
      </div>
    </>
  );
};