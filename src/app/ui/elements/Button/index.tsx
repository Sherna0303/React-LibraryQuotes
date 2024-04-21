import { ReactElement } from 'react';

interface ButtonProps {
  className: string;
  text: string;
  disabled?: boolean;
}

export const Button = ({ className, text, disabled }: ButtonProps): ReactElement => {

  return (
    <button disabled={disabled} className={className}>
      {text}
    </button>
  );
};
