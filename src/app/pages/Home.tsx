import { ReactElement } from 'react';
import { LinkRoute } from '../ui/elements/LinkRoute';

export const Home = (): ReactElement => {
  return <section>
    <h1>Home</h1>
    <li>
      <ul><LinkRoute route='/funtion1' text='Funcion 1' /></ul>
    </li>
    <li>
      <ul><LinkRoute route='/funtion2' text='Funcion 2' /></ul>
    </li>
    <li>
      <ul><LinkRoute route='/funtion3' text='Funcion 3' /></ul>
    </li>
  </section>;
};