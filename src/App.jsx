import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shoppage/shoppage.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUser, userUpdateListener } from './firebase/firebase.utils'

export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unregister = null;

  componentDidMount() {
    this.unregister = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUser(userAuth);

        userUpdateListener(userRef, snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount() {
    this.unregister();
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
};
