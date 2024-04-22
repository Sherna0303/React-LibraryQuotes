import { Copy } from '../../../core/models/copy.model';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';
import './style.css';

interface CartProps {
  cart: Copy[];
  removeFromCart: (copyId: number) => void;
  increaseQuantity: (copyId: number) => void;
  decreaseQuantity: (copyId: number) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const handleRemoveFromCart = (copyId: number) => {
    removeFromCart(copyId);
  };

  const handleIncreaseQuantity = (copyId: number) => {
    increaseQuantity(copyId);
  };

  const handleDecreaseQuantity = (copyId: number) => {
    decreaseQuantity(copyId);
  };

  return (
    <div className='cart__container'>
      <Title className='cart__title' text='Shopping Cart' type='h2'/>
      <ul className='cart__menu'>
        {cart.map((item, index) => (
          <li className='cart__item' key={index}>
            <Title className='item__title' text={item.name} type='h3'/>

            <div className="book__detail-container">
              <Span className='book__detail' text='Author:'/>
              <Paragraph className='book__item' text={item.author}/>
            </div>

            <div className="book__detail-container">
              <Span className='book__detail' text='Amount:'/>
              <Paragraph className='book__item' text={item.quantity.toString()}/>
            </div>
            
            <div className="cart__amount">
              <div className="amount__buttons-container">
                <button className='amount__button' onClick={() => handleIncreaseQuantity(item.copyId)}>+</button>
                <button className='amount__button' onClick={() => handleDecreaseQuantity(item.copyId)}>-</button>
              </div>
              <button className='cart__remove' onClick={() => handleRemoveFromCart(item.copyId)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};