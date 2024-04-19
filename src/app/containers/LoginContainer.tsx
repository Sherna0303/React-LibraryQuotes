import { ReactElement } from 'react';
import { Title } from '../ui/elements/Title';
import { FormLogin } from '../ui/forms/Login';
import { LinkRoute } from '../ui/elements/LinkRoute';

export const LoginContainer = (): ReactElement => {
  return (
    <section>
      <Title text="Login" className='Login__Title' type='h1' />
      <FormLogin />
      <LinkRoute route='/register' text='Register' />
    </section>
  );
};