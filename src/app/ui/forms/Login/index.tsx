import { FormEvent, ReactElement } from 'react';
import { useAuth } from '../../../core/hooks/useAuth';
import { Label } from '../../elements/Label';
import { Legend } from '../../elements/Legend';
import { Button } from '../../elements/Button';

export const FormLogin = (): ReactElement => {
  const { authenticate, error } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      elements: {
        email: { value: string };
        password: { value: string };
      };
    };
    
    const email = target.elements.email.value;
    const password = target.elements.password.value;
    authenticate(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='main__form'>
      <fieldset>
        <Legend className='main__legend' text='Enter credentials' />
        <Label classNameLabel='main__label' classNameInput='main_input' nameInput='email' text='Email:' type='text'/>
        <Label classNameLabel='main__label' classNameInput='main_input' nameInput='password' text='Password:' type='password'/>
      </fieldset>
      <Button className='main__button' text='Send' />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};