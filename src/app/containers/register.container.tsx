import { ReactElement } from 'react';
import { FormRegister } from '../ui/forms/Register';
import { Title } from '../ui/elements/Title';

export const RegisterContainer = (): ReactElement => {
  return <div className='register__container'>
    <Title className='main__title' text='Register' type='h1'/>
    <FormRegister />
  </div>;
};