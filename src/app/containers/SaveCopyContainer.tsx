import { ReactElement } from 'react';
import { Title } from '../ui/elements/Title';
import { FormSaveCopy } from '../ui/forms/SaveCopy';

export const SaveCopyContainer = (): ReactElement => {
  return (
    <section>
      <Title text="Funtion 1" className='Login__Title' type='h1' />
      <FormSaveCopy />
    </section>
  );
};