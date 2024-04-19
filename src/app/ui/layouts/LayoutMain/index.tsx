import { Outlet } from 'react-router-dom';
import './style.css';
import { ReactElement } from 'react';

export const LayoutMain = (): ReactElement => {
  return(
    <>
      <h1>header</h1>
      <main>
        <Outlet/>
      </main>
      <h1>footer</h1>
    </>
  );
};