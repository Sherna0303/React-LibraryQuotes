import { Copy } from '../../../core/models/copy.model';
import { Button } from '../../elements/Button';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';
import { Title } from '../../elements/Title';
import './style.css';

interface BookProps {
  book: Copy;
  addToCart: (copy: Copy) => void;
  isInCart: boolean;
}

export const Book: React.FC<BookProps> = ({ book, addToCart, isInCart }) => {
  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className={`book ${isInCart ? 'book__container book--in-cart' : 'book__container'}`}>
      <img className='book__img' src='https://imagessl6.casadellibro.com/a/l/s5/36/9788408125136.webp' />
      <Title className='book__title' text={book.name} type='h2'/>
      <div className="book__detail-container">
        <Span className='book__detail' text='Author:'/>
        <Paragraph className='book__item' text={book.author}/>
      </div>
      <div className="book__detail-container">
        <Span className='book__detail' text='Price:'/>
        <Paragraph className='book__item' text={book.price.toFixed(2)}/>
      </div>
      <div className="book__detail-container">
        <Span className='book__detail' text='Type:'/>
        <Paragraph className='book__item' text={book.type}/>
      </div>
      <Button className='book__button' text={isInCart ? 'Added' : 'Add to Cart'} onClick={handleAddToCart}/>
    </div>
  );
};