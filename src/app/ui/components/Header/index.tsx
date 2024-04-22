import { ReactElement } from 'react';
import { LinkRoute } from '../../elements/LinkRoute';
import './style.css';
import Icon from '../../elements/Icon/inde';
import { Paragraph } from '../../elements/Paragraph';
import { useLogOut } from '../../../core/hooks/useLogOut';

export const Header = (): ReactElement => {
  const logOut = useLogOut();

  const handleClick = () => {
    logOut();
  };

  return (
    <header className='main__header'>
      <div className="main__logo-container">
        <Icon color='white' size={32} icon='book-2'/>
        <Paragraph className='logo__text' text='BookStore'/>
      </div>
      <nav className='nav__header'>
        <ul className='menu__header'>
          <li><LinkRoute className='item__header' route='/funtion1' text='Save' /></li>
        </ul>
        <ul className='menu__header'>
          <li><LinkRoute className='item__header' route='/funtion2' text='Quotation' /></li>
        </ul>
        <ul className='menu__header'>
          <li><LinkRoute className='item__header' route='/funtion3' text='Budget' /></li>
        </ul>
        <ul className='menu__header'>
          <li className='item__header'>
            <button className='button__header' onClick={handleClick}><Icon color='white' size={20} icon='logout' /></button>
          </li>
        </ul>
      </nav>
    </header>
  );
};