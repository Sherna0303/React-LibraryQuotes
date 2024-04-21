import { FormEvent, ReactElement, useEffect, useState } from 'react';
import { useSaveCopy } from '../../../core/hooks/useSaveCopy';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import './style.css';
import { Span } from '../../elements/Span';
import { Options } from '../../elements/Options';

interface FormData {
  name?: string;
  author?: string;
  price?: number;
  type?: string;
}

export const FormSaveCopy = (): ReactElement => {
  const { saveCopy, error } = useSaveCopy();
  const [formData, setFormData] = useState<FormData>();
  const [nameError, setNameError] = useState<string | null>(null);
  const [authorError, setAuthorError] = useState<string | null>(null);
  const [priceError, setPriceError] = useState<string | null>(null);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setFormData((prevData) => ({ ...prevData, name: newName }));

    if (newName.length < 3) {
      setNameError('El nombre debe tener al menos 3 caracteres');
    } else {
      setNameError(null);
    }
  };

  const handleChangeAuthor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthor = event.target.value;
    setFormData((prevData) => ({ ...prevData, author: newAuthor }));

    if (newAuthor.length < 3) {
      setAuthorError('El autor debe tener al menos 3 caracteres');
    } else {
      setAuthorError(null);
    }
  };

  const handleChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = Number(event.target.value);
    setFormData((prevData) => ({ ...prevData, price: newPrice }));

    if (newPrice <= 0) {
      setPriceError('El precio debe ser mayor que 0');
    } else {
      setPriceError(null);
    }
  };

  const handleChangeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = event.target.value;
    setFormData((prevData) => ({ ...prevData, type: newType }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid || !formData) {
      return;
    }

    const { name = '', author = '', price = 0, type = 'BOOK' } = formData;
    saveCopy(name, author, price, type);
  };

  useEffect(() => {
    if (!formData) return;

    const { name = '', author = '', price = 0 } = formData;

    setIsFormValid(!(name.length < 3 || author.length < 3 || price <= 0));
  }, [formData]);

  return (
    <form onSubmit={handleSubmit} className='main__form main__form-copy'>
      <fieldset className='main__fieldset'>
        <Label classNameLabel='main__label main__label-copy' classNameSpan='main__span' classNameInput={`main__input ${nameError ? 'error' : ''}`} nameInput='name' type='text' text='Name:' onChange={handleChangeName} />
        {nameError && <Span className='main__error' text={nameError} />}
        <Label classNameLabel='main__label main__label-copy' classNameSpan='main__span' classNameInput={`main__input ${authorError ? 'error' : ''}`} nameInput='author' type='text' text='Author:' onChange={handleChangeAuthor} />
        {authorError && <Span className='main__error' text={authorError} />}
        <Label classNameLabel='main__label main__label-copy' classNameSpan='main__span' classNameInput={`main__input ${priceError ? 'error' : ''}`} nameInput='price' type='number' text='Price:' onChange={handleChangePrice} />
        {priceError && <Span className='main__error' text={priceError} />}
        
        <label className='main__label main__label-copy'>Type:
          <select className='main__select' id="type" name="type" value={formData?.type || ''} onChange={handleChangeType}>
            <Options className='main__option' value='BOOK' text='Book'/>
            <Options className='main__option' value='NOVEL' text='Novel'/>
          </select>
        </label>
      </fieldset>
      {error && <Span className={`main__${error === 'Guardado satisfactoriamente' ? 'success' : 'error'}`} text={error}/>}
      <Button className='main__button' text='Save Copy' disabled={!isFormValid} />
    </form>
  );
};