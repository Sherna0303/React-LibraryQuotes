import React from 'react';
import { Copy } from '../../../core/models/copy.model';

const CopyItem: React.FC<{ copy: Copy }> = ({ copy }) => {
  const priceWithTwoDecimals = copy.price.toFixed(2);

  return (
    <div>
      <h3>{copy.name}</h3>
      <p>Author: {copy.author}</p>
      <p>Price: ${priceWithTwoDecimals}</p>
      <p>Type: {copy.type}</p>
    </div>
  );
};

export default CopyItem;
