import React from 'react';
import CopyItem from './CopyItem';

interface Copy {
  copyId: number;
  name: string;
  author: string;
  price: number;
  type: string;
}

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
