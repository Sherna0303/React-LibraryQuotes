import { FormEvent, ReactElement, useState } from 'react';
import { Legend } from '../../elements/Legend';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import { useSaveCopy } from '../../../core/hooks/useSaveCopy';
import { Options } from '../../elements/Options';

interface typeData {
  type: string;
}

const initialFormState: typeData = {
  type: 'BOOK',
};


export const FormSaveCopy = (): ReactElement => {
  const { saveCopy, error } = useSaveCopy();
  const [typeData, setTypeData] = useState<typeData>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTypeData({ ...typeData, [name]: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
          elements: {
            name: { value: string }
            author: { value: string };
            price: { value: number };
            type: { value: string };
          };
        };
        
    const name = target.elements.name.value;
    const author = target.elements.author.value;
    const price = target.elements.price.value;
    const type = target.elements.type.value;

    saveCopy(name, author, price, type);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <Legend className='main__legend' text='Register credentials'/>
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='name' type='text' text='Name:' />
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='author' type='text' text='Author:' />
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='price' type='number' text='Price:' />
        
        <label className='main__label'>Type:
          <select className='main__select' id="type" name="type" value={typeData.type} onChange={handleChange}>
            <Options className='main__option' value='BOOK' text='Book'/>
            <Options className='main__option' value='NOVEL' text='Novel'/>
          </select>
        </label>

      </fieldset>
      <Button className='main__button' text='Send'/>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};