import React from 'react';
import CopyItem from './CopyItem';
import { Copy } from '../../../core/models/copy.model';

const CopyList: React.FC<{ copies: Copy[] }> = ({ copies }) => {
  return (
    <>
      {copies.map((copy) => (
        <CopyItem key={copy.copyId} copy={copy} />
      ))}
    </>
  );
};

export default CopyList;
