import { useState } from 'react';
import { FormEvent, ReactElement } from 'react';
import { useAuth } from '../../../core/hooks/useAuth';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import './style.css';
import { Span } from '../../elements/Span';

export const FormLogin = (): ReactElement => {
  const { authenticate, error } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate(email, password);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isEmailValid = /\S+@\S+\.\S+/.test(email);

  return (
    <form onSubmit={handleSubmit} className='main__form'>
      <fieldset className='main__fieldset'>
        <Label classNameLabel='main__label' classNameSpan='main__label-span' classNameInput='main__input' nameInput='email' text='Email:' type='text' onChange={handleEmailChange} />
        <Label classNameLabel='main__label' classNameSpan='main__label-span' classNameInput='main__input' nameInput='password' text='Password:' type='password' onChange={handlePasswordChange} />
        {error && <Span className='main__span-error' text={error}/>}
      </fieldset>
      <Button className='main__button' text='Sign In' disabled={!isEmailValid} />
    </form>
  );
};
