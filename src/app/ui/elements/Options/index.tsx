import { ReactElement } from 'react';
import './style.css';

interface LinkRouteProps {
  className: string;
  value: string;
  text: string;
}

export const Options = ({ className, value , text }: LinkRouteProps): ReactElement => {

  return (
    <option className={className} value={value}>{text}</option>
  );
};
