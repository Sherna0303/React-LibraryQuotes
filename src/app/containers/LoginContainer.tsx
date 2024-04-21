import { ReactElement } from 'react';
import { Title } from '../ui/elements/Title';
import { FormLogin } from '../ui/forms/Login';
import { LinkRoute } from '../ui/elements/LinkRoute';

export const LoginContainer = (): ReactElement => {
  return (
    <div className='login__container'>
      <Title text="Login" className='login__Title' type='h1' />
      <FormLogin />
      <div className="separator">
        <span className="separator-line" />
        <span className="or">or</span>
        <span className="separator-line" />
      </div>
      <LinkRoute route='/register' text='Register' />
    </div>
  );
};