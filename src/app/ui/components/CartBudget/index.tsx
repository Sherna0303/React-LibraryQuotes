import { Copy } from '../../../core/models/copy.model';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';
import './style.css';

interface CartBudgetProps {
  cart: Copy[];
  removeFromCart: (copyId: number) => void;
}

export const CartBudget: React.FC<CartBudgetProps> = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (copyId: number) => {
    removeFromCart(copyId);
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
            
            <div className="cart__amount cart__amount-budget">
              <button className='cart__remove' onClick={() => handleRemoveFromCart(item.copyId)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};