import { ReactElement } from 'react';
import { Title } from '../ui/elements/Title';
import { FormSaveCopy } from '../ui/forms/SaveCopy';

export const SaveCopyContainer = (): ReactElement => {
  return (
    <div className='save__container'>
      <Title text="Add Copy" className='main__title' type='h1' />
      <FormSaveCopy />
    </div>
  );
};