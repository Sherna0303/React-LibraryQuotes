import { ReactElement } from 'react';
import { FormLogin } from '../ui/forms/Login';
import { Link } from 'react-router-dom';

export const Login = (): ReactElement => {
  return <section>
    <h1>Auth</h1>
    <FormLogin />
    <Link to={'/register'}>Register</Link>
  </section>;
};