import { FormEvent, ReactElement, useState } from 'react';
import { useRegister } from '../../../core/hooks/userRegister';
import { Legend } from '../../elements/Legend';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';

export const FormRegister = (): ReactElement => {
  const { register, error} = useRegister();
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
          elements: {
            name: { value: string }
            email: { value: string };
            password: { value: string };
            repeatPassword: { value: string };
          };
        };
        
    const name = target.elements.name.value;
    const email = target.elements.email.value;
    const password = target.elements.password.value;
    const repeatPassword = target.elements.repeatPassword.value;

    if (password !== repeatPassword) {
      setPasswordMatchError('Las contraseñas no coinciden');
      return;
    }

    setPasswordMatchError(null);

    register(name, email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <Legend className='main__legend' text='Register credentials'/>
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='name' type='text' text='Name:' />
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='email' type='text' text='Email:' />
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='password' type='password' text='Password:' />
        <Label classNameLabel='main__label' classNameInput='main__input' nameInput='repeatPassword' type='password' text='Repeat password:' />
      </fieldset>
      <Button className='main__button' text='Send'/>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {passwordMatchError && <span style={{ color: 'red' }}>{passwordMatchError}</span>}
    </form>
  );
};