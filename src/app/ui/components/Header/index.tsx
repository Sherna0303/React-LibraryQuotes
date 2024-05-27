import { ReactElement, useState } from 'react';
import { LinkRoute } from '../../elements/LinkRoute';
import './style.css';
import Icon from '../../elements/Icon/inde';
import { Paragraph } from '../../elements/Paragraph';
import { useLogOut } from '../../../core/hooks/useLogOut';

export const Header = (): ReactElement => {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const logOut = useLogOut();

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const handleClick = () => {
    logOut();
  };

  return (
    <header className='main__header'>
      <div className="main__logo-container">
        <Icon color='white' size={32} icon='book-2'/>
        <Paragraph className='logo__text' text='BookStore'/>
      </div>
      <nav className={`nav__header ${menuVisible ? '' : 'header__menu--hidden'}`}>
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
      <input type='checkbox' id='checkbox' />
      <label htmlFor='checkbox' className='header__toggle' onClick={toggleMenu}>
        <div className='bars' id='bar1' />
        <div className='bars' id='bar2' />
        <div className='bars' id='bar3' />
      </label>
    </header>
  );
};