import { FormEvent, ReactElement, useState } from 'react';
import { useRegister } from '../../../core/hooks/userRegister';
import { Label } from '../../elements/Label';
import { Button } from '../../elements/Button';
import './style.css';
import { Span } from '../../elements/Span';

export const FormRegister = (): ReactElement => {
  const { register, error } = useRegister();
  const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !password || !repeatPassword || password.length < 8 || password !== repeatPassword || name.length < 3 || !isValidEmail(email)) {
      return;
    }

    register(name, email, password);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length < 8) {
      setPasswordMatchError('Password must be at least 8 characters');
    } else {
      setPasswordMatchError(null);
    }
  };

  const handleRepeatPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRepeatPassword = event.target.value;
    setRepeatPassword(newRepeatPassword);
    if (newRepeatPassword !== password) {
      setPasswordMatchError('Passwords do not match');
    } else {
      setPasswordMatchError(null);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setName(newName);
    if (newName.length < 3) {
      setNameError('The name must be at least 3 characters');
    } else {
      setNameError(null);
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    if (!isValidEmail(newEmail)) {
      setEmailError('Enter a valid email address');
    } else {
      setEmailError(null);
    }
  };

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className='main__form'>
      <fieldset className='main__fieldset'>
        <Label classNameLabel='main__label' classNameSpan='main__span' classNameInput={`main__input ${nameError ? 'error' : ''}`} nameInput='name' type='text' text='Name:' onChange={handleNameChange} />
        {nameError && <Span className='main__span-error' text={nameError} />}
        <Label classNameLabel='main__label' classNameSpan='main__span' classNameInput={`main__input ${emailError ? 'error' : ''}`} nameInput='email' type='text' text='Email:' onChange={handleEmailChange} />
        {emailError && <Span className='main__span-error' text={emailError} />}
        <Label classNameLabel='main__label' classNameSpan='main__span' classNameInput='main__input' nameInput='password' type='password' text='Password:' onChange={handlePasswordChange} />
        <Label classNameLabel='main__label' classNameSpan='main__span' classNameInput='main__input' nameInput='repeatPassword' type='password' text='Repeat password:' onChange={handleRepeatPasswordChange} />
        {passwordMatchError && <Span className='main__span-error' text={passwordMatchError} />}
        {error && <Span className='main__span-error' text={error} />}
      </fieldset>
      <Button className='main__button' text='Sign Up' disabled={!name || !email || !password || !repeatPassword || password.length < 8 || password !== repeatPassword || name.length < 3 || !isValidEmail(email)} />
    </form>
  );
};