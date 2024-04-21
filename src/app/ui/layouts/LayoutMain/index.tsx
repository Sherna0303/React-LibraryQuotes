import { Outlet } from 'react-router-dom';
import './style.css';
import { ReactElement } from 'react';
import { Header } from '../../components/Header';

export const LayoutMain = (): ReactElement => {
  return(
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <h1>footer</h1>
    </>
  );
};