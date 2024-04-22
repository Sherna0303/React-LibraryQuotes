import React from 'react';
import { Paragraph } from '../../elements/Paragraph';
import { Span } from '../../elements/Span';

interface CopyDetailsProps {
  copy: {
    name: string;
    author: string;
    price: number;
    discount: number;
    totalPrice: number;
  };
}

export const CopyDetails: React.FC<CopyDetailsProps> = ({ copy }) => {
  return (
    <>
      <Paragraph className='copies__name' text={copy.name} />

      <div className="copies__detail-container">
        <Span className='copies__detail' text='Author:'/>
        <Paragraph className='copies__author' text={copy.author} />
      </div>

      <div className="copies__detail-container">
        <Span className='copies__detail' text='Price:'/>
        <Paragraph className='copies__price' text={copy.price.toFixed(2)}/>
      </div>
      
      <div className="copies__detail-container">
        <Span className='copies__detail' text='Discount:'/>
        <Paragraph className='copies__discount' text={copy.discount.toFixed(2)} />
      </div>

      <div className="copies__detail-container">
        <Span className='copies__detail' text='Total Price:'/>
        <Paragraph className='copies__totalPrice' text={copy.totalPrice.toFixed(2)} />
      </div>
    </>
  );
};
