import React from 'react';
import { Paragraph } from '../../elements/Paragraph';

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
      <Paragraph className='copies__name' text={`Name: ${copy.name}`} />
      <Paragraph className='copies__author' text={`Author: ${copy.author}`} />
      <Paragraph className='copies__price' text={`Price: ${copy.price.toFixed(2)}`} />
      <Paragraph className='copies__discount' text={`Discount: ${copy.discount.toFixed(2)}`} />
      <Paragraph className='copies__totalPrice' text={`Total Price: ${copy.totalPrice.toFixed(2)}`} />
    </>
  );
};
