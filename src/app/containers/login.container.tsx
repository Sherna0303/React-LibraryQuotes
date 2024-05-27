import { ReactElement } from 'react';
import { Title } from '../ui/elements/Title';
import { FormLogin } from '../ui/forms/Login';
import { LinkRoute } from '../ui/elements/LinkRoute';

export const LoginContainer = (): ReactElement => {
  return (
    <div className='login__container'>
      <Title text="Login" className='main__title' type='h1' />
      <FormLogin />
      <div className="main__separator">
        <span className="main__separator-line" />
        <span className="main__or">or</span>
        <span className="main__separator-line" />
      </div>
      <LinkRoute className='main__link' route='/register' text='Register' />
    </div>
  );
};