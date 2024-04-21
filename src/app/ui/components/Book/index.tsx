import { Copy } from '../../../core/models/copy.model';

interface BookProps {
  book: Copy;
  addToCart: (copy: Copy) => void;
}

export const Book: React.FC<BookProps> = ({ book, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div>
      <h2>{book.name}</h2>
      <p>Author: {book.author}</p>
      <p>Price: ${book.price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};