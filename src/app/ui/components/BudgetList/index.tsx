import React, { useState, useEffect } from 'react';
import { ChangeEvent } from 'react';
import { Copy } from '../../../core/models/copy.model';
import { Book } from '../Book';
import { PriceListResponse } from '../PriceListResponse';
import { Title } from '../../elements/Title';
import { CopyListDetail } from '../../../core/models/copy-list-price-response.model';
import './style.css';
import { CartBudget } from '../CartBudget';
import { calculatePriceBudgetListService } from '../../../core/services/calculatePriceBudgetList.service';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import { Span } from '../../elements/Span';

interface BudgetListProps {
  books: Copy[];
  cart: Copy[];
  addToCart: (copy: Copy) => void;
  removeFromCart: (copyId: number) => void;
}

export const BudgetList: React.FC<BudgetListProps> = ({ books, cart, addToCart, removeFromCart }) => {
  const [budget, setBudget] = useState<number>(0);
  const [backendResponse, setBackendResponse] = useState<CopyListDetail>();
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    setIsButtonDisabled(!isCartValid(cart) || budget <= 0);
    if (!isCartValid(cart)) {
      setError('Please select at least one novel and one book.');
    } else if (budget <= 0) {
      setError('Budget must be greater than 0.');
    } else {
      setError('');
    }
  }, [cart, budget]);

  const handleBudgetChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setBudget(value);
  };

  const isCartValid = (cart: Copy[]) => {
    const novelCount = cart.filter(item => item.type === 'NOVEL').length;
    const bookCount = cart.filter(item => item.type === 'BOOK').length;
    return novelCount > 0 && bookCount > 0;
  };

  const handleClick = () => {
    if (cart.length > 0 && budget > 0) {
      calculatePriceBudgetListService(cart, budget)
        .then(response => {
          if (response) {
            setBackendResponse(response);
            setShowModal(true);
          } else {
            setError('The budget does not cover the wholesale discount');
          }

          
        });
    } else {
      setError('Please ensure the budget is greater than 0.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='view__container'>
      <Title className='main__title main__title-quotation' text='BookStore by budget' type='h1'/>
      <div className='main__content'>
        <ul className='main__copies'>
          {books && books.map(book => (
            <li className='main__card'>
              <Book key={book.copyId} book={book} addToCart={addToCart} isInCart={cart.some(item => item.copyId === book.copyId)} />
            </li>
          ))}
        </ul>
        <div className='main__cart'>
          <CartBudget cart={cart} removeFromCart={removeFromCart} />
          <Label classNameInput='main__input main__input-budget' classNameLabel='main__label main__label-budget' classNameSpan='main__span main__span-budget' nameInput='budget' text='Budget:' type='number' onChange={handleBudgetChange} />
          {error && <Span className='main__span-error span__error-budget' text={error}/>}
          <Button className='main__button main__button-cart' onClick={handleClick} text='Calculate' disabled={isButtonDisabled}/>
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
