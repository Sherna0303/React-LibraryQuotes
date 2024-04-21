import { useState } from 'react';
import { saveCopyService } from '../services/saveCopy.service';

export const useSaveCopy = () => {
  const [error, setError] = useState<string>();
  
  const saveCopy = (name: string, author: string, price: number, type: string) => {
    saveCopyService({ name, author, price, type })
      .then((isSave) => {
        if (isSave) {
          setError('Guardado satisfactoriamente');
        } else {
          setError('No se pudo registrar');
        }
      });
  };
  
  return { saveCopy, error };
};