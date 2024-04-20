import React, { useState, useEffect } from 'react';
import { Copy } from '../core/models/copy';
import { copyListService } from '../core/services/copyList.service';
import CopyList from '../ui/components/CopyList';

const CopyListContainer: React.FC = () => {
  const [copies, setCopies] = useState<Copy[]>([]);

  useEffect(() => {
    const fetchAndSetCopies = async () => {
      try {
        const copiesData = await copyListService();
        setCopies(copiesData);
      } catch (error) {
        console.error('Error fetching copies:', error);
      }
    };
    fetchAndSetCopies();
  }, []);

  return (
    <>
      <h1>Copy List</h1>
      <CopyList copies={copies} />
    </>
  );
};

export default CopyListContainer;
