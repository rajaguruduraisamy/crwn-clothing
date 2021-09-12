import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';

import './header.styles.scss';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
      </div>
    </div>
  )
}
