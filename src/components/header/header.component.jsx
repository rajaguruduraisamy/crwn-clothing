import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/svg/Logo.svg';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const BaseHeader = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/contact' className='option'>CONTACT</Link>
        {currentUser ? 
          <div className='option' onClick={() => { auth.signOut()}}>SIGNOUT {currentUser.displayName}</div> : 
          <Link to='/signin' className='option'>SIGNIN</Link>
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
};

export const Header = connect(mapStateToProps)(BaseHeader);
