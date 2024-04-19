import { ReactElement } from 'react';
import { FormLogin } from '../ui/forms/Login';

export const Login = (): ReactElement => {
  return <section>
    <h1>Auth</h1>
    <FormLogin />
  </section>;
};