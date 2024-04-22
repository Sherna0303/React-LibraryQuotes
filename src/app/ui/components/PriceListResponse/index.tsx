import React from 'react';
import { CopyDetails } from './CopyDetails';
import { Title } from '../../elements/Title';
import { CopyListDetail } from '../../../core/models/copy-list-price-response.model';
import './style.css';
import { Span } from '../../elements/Span';
import { Paragraph } from '../../elements/Paragraph';

export const PriceListResponse: React.FC<CopyListDetail> = ({ responseData }) => {
  if (!responseData.copies) {
    return;
  }

  return (
    <>
      <Title className='result__title' text='Result' type='h2'/>

      <div className="result__detail-container">
        <Span className='result__detail' text='Seniority Years:'/>
        <Paragraph className='result__antiquityYears' text={responseData.antiquityYears.toString()}/>
      </div>

      <div className="result__detail-container">
        <Span className='result__detail' text='Total:'/>
        <Paragraph className='result__total' text={responseData.total.toFixed(2)}/>
      </div>

      <div className="result__detail-container">
        <Span className='result__detail' text='Total Discount:'/>
        <Paragraph className='result__totalDiscount' text={responseData.totalDiscount.toFixed(2)}/>
      </div>

      <Title className='result__title-copies' text='Copies:' type='h2'/>

      <div className='result_copies'>
        {responseData.copies.map((copy, index) => (
          <CopyDetails key={ copy.name+''+index} copy={copy} />
        ))}
      </div>
    </>
  );
};
