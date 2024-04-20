import { Copy } from '../../../core/models/copy.model';

interface CartProps {
  cart: Copy[];
  removeFromCart: (copyId: number) => void;
}

export const Cart: React.FC<CartProps> = ({ cart, removeFromCart }) => {
  const handleRemoveFromCart = (copyId: number) => {
    removeFromCart(copyId);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Author: {item.author}</p>
            <p>{item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.copyId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};