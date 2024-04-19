import { ReactElement } from 'react';
import './style.css';

interface ButtonProps {
  className: string;
  text: string;
  
}

export const Button = ({ className, text }: ButtonProps): ReactElement => {

  return (
    <button className={className}>
      {text}
    </button>
  );
};
