import React from 'react';
import { CopyDetails } from './CopyDetails';

interface PriceListResponseProps {
  responseData: {
    antiquityYears: number;
    total: number;
    totalDiscount: number;
    copies: {
      name: string;
      author: string;
      price: number;
      discount: number;
      totalPrice: number;
    }[];
  };
}

export const PriceListResponse: React.FC<PriceListResponseProps> = ({ responseData }) => {
  return (
    <div>
      <h2>Antiquity Years: {responseData.antiquityYears}</h2>
      <h2>Total: {responseData.total}</h2>
      <h2>Total Discount: {responseData.totalDiscount}</h2>
      <h2>Copies:</h2>
      {responseData.copies.map((copy, index) => (
        <CopyDetails key={index} copy={copy} />
      ))}
    </div>
  );
};
