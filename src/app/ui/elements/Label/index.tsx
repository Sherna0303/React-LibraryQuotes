import { ChangeEventHandler, ReactElement } from 'react';
import './style.css';

interface LabelProps {
  classNameLabel: string;
  classNameInput: string;
  classNameSpan: string;
  text: string;
  type: string;
  nameInput: string;
  onChange: ChangeEventHandler;
}

export const Label = ({ classNameLabel, classNameInput, classNameSpan,text, type, nameInput, onChange }: LabelProps): ReactElement => {

  return (
    <label className={classNameLabel}>
      <span className={classNameSpan}>{text}</span>
      <input className={classNameInput} type={type} name={nameInput} onChange={onChange}/>
    </label>
  );
};
