import { FormEvent, ReactElement } from 'react';
import { Legend } from '../../elements/Legend';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import { useSaveCopy } from '../../../core/hooks/useSaveCopy';

export const FormSaveCopy = (): ReactElement => {
  const { saveCopy, error} = useSaveCopy();


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
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='type' type='text' text='Type:' />

      </fieldset>
      <Button className='main__button' text='Send'/>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};