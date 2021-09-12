import React, { Component } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({ email: '', password: ''});
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
          <FormInput type='email' name='email' value={this.state.email} handleChange={this.onChangeHandler} required label='Email'></FormInput>
          <FormInput type='password' name='password' value={this.state.password} handleChange={this.onChangeHandler} required label='Password'></FormInput>
          <CustomButton type='submit'>Sign In</CustomButton>
        </form>
      </div>
    )
  }
}
