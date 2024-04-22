import { useState } from 'react';
import { saveCopyService } from '../services/saveCopy.service';

export const useSaveCopy = () => {
  const [error, setError] = useState<string>();
  
  const saveCopy = (name: string, author: string, price: number, type: string) => {
    saveCopyService({ name, author, price, type })
      .then((isSave) => {
        if (isSave) {
          setError('Saved successfully');
        } else {
          setError('Could not register');
        }
      });
  };
  
  return { saveCopy, error };
};