import React from 'react';
import { CopyDetails } from './CopyDetails';
import { Title } from '../../elements/Title';
import { CopyListDetail } from '../../../core/models/copy-list-price-response.model';

export const PriceListResponse: React.FC<CopyListDetail> = ({ responseData }) => {
  if (!responseData.copies) {
    return;
  }

  return (
    <>
      <Title className='result__title' text='Result' type='h2'/>
      <Title className='result__antiquityYears' text={`Seniority Years: ${responseData.antiquityYears}`} type='h4'/>
      <Title className='result__total' text={`Total: ${responseData.total.toFixed(2)}`} type='h4'/>
      <Title className='result__totalDiscount' text={`Total Discount: ${responseData.totalDiscount.toFixed(2)}`} type='h4'/>
      <Title className='result__title-copies' text='Copies:' type='h2'/>
      <div className='result_copies'>
        {responseData.copies.map((copy, index) => (
          <CopyDetails key={ copy.name+''+index} copy={copy} />
        ))}
      </div>
    </>
  );
};
