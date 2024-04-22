import { useState } from 'react';
import { Copy } from '../../../core/models/copy.model';
import { calculatePriceCopyListService } from '../../../core/services/calculatePriceCopyList.service';
import { Book } from '../Book';
import { Cart } from '../Cart';
import { PriceListResponse } from '../PriceListResponse';
import { Title } from '../../elements/Title';
import { CopyListDetail } from '../../../core/models/copy-list-price-response.model';
import './style.css';

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
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (cart.length > 0) {
      calculatePriceCopyListService(cart)
        .then(response => {
          setBackendResponse(response);
          setShowModal(true);
        });
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='view__container'>
      <Title className='main__title main__title-quotation' text='Bookstore' type='h1'/>
      <div className='main__content'>
        <ul className='main__copies'>
          {books && books.map(book => (
            <li className='main__card'>
              <Book key={book.copyId} book={book} addToCart={addToCart} isInCart={cart.some(item => item.copyId === book.copyId)} />
            </li>
          ))}
        </ul>
        <div className='main__cart'>
          <Cart cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
          <button className='main__button main__button-cart' onClick={handleClick}>Calculate</button>
        </div>
      </div>
      
      {showModal && (
        <div className="modal">
          <div className="modal__content">
            <span className="modal__close" onClick={closeModal}>X</span>
            <div className='main__result'>
              {backendResponse && <PriceListResponse responseData={backendResponse}/>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
