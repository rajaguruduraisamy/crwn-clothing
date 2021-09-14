import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shoppage/shoppage.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUser, userUpdateListener } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

class BaseApp extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unregister = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unregister = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userUpdateListener(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount() {
    this.unregister();
  }

  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'></Redirect>) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
};

export const App = connect(mapStateToProps, mapDispatchToProps)(BaseApp);
