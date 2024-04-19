import { FormEvent, ReactElement, useState } from 'react';
import { useRegsiter } from '../../../core/hooks/userRegister';

export const FormRegister = (): ReactElement => {
  const { register, error} = useRegsiter();
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
        <legend>Register credentials</legend>

        <label>
              Name:
          <input type="text" name='name' />
        </label>
    
        <label>
              Email:
          <input type="text" name='email' />
        </label>
    
        <label>
              Password:
          <input type="password" name='password' />
        </label>

        <label>
              Repeat password:
          <input type="password" name='repeatPassword' />
        </label>
      </fieldset>
      <button>Send</button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {passwordMatchError && <span style={{ color: 'red' }}>{passwordMatchError}</span>}
    </form>
  );
};