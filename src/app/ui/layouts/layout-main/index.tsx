import { Outlet } from 'react-router-dom';
import './style.css';
import { ReactElement } from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const LayoutMain = (): ReactElement => {
  return(
    <>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </>
  );
};