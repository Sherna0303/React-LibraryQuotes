import { ReactElement } from 'react';
import './style.css';

interface LabelProps {
  classNameLabel: string;
  classNameInput: string;
  text: string;
  type: string;
  nameInput: string;
  
}

export const Label = ({ classNameLabel, classNameInput, text, type, nameInput }: LabelProps): ReactElement => {

  return (
    <label className={classNameLabel}>
      {text}
      <input className={classNameInput} type={type} name={nameInput} />
    </label>
  );
};
