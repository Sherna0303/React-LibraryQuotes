import React from 'react';

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
    <div>
      <p>Name: {copy.name}</p>
      <p>Author: {copy.author}</p>
      <p>Price: {copy.price}</p>
      <p>Discount: {copy.discount}</p>
      <p>Total Price: {copy.totalPrice}</p>
    </div>
  );
};
