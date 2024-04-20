import { Copy } from '../../../core/models/copy.model';

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
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>Author: {item.author}</p>
            <p>{item.quantity}</p>
            <button onClick={() => handleIncreaseQuantity(item.copyId)}>+</button>
            <button onClick={() => handleDecreaseQuantity(item.copyId)}>-</button>
            <button onClick={() => handleRemoveFromCart(item.copyId)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};