import { FormEvent, ReactElement } from 'react';
import { useAuth } from '../../../core/hooks/useAuth';

export const FormLogin = (): ReactElement => {
  const { authenticate, error } = useAuth();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      elements: {
        userName: { value: string };
        password: { value: string };
      };
    };
    
    const email = target.elements.userName.value;
    const password = target.elements.password.value;
    authenticate(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Enter credentials</legend>

        <label>
          Email:
          <input type="text" name='email' />
        </label>

        <label>
          Password:
          <input type="password" name='password' />
        </label>
      </fieldset>
      <button>Send</button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </form>
  );
};