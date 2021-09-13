import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

export const Header = ({ user }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
        {user ? 
          <div className='option' onClick={() => { auth.signOut()}}>SIGNOUT {user.displayName}</div> : 
          <Link to='/signin' className='option'>SIGNIN</Link>
        }
      </div>
    </div>
  )
}
