import React, { Component } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { createAuthWithEmailAndPassword, createUser } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { displayName: '', email: '', password: '', confirmPassword: ''};
  }

  onSubmitHandler = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (!displayName || !email || !password) {
      alert('Enter all required fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Password and confirmpassword mismatch');
      return;
    }
    try {
      const user = await createAuthWithEmailAndPassword(email, password);
      await createUser(user, { displayName });
      this.setState({ displayName: '', email: '', password: '', confirmPassword: ''});
    } catch (error) {
      console.log('Error creating user', error);
      alert(error);
    } 
  }

  onChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.onSubmitHandler}>
        <FormInput type='text' name='displayName' value={this.state.displayName} handleChange={this.onChangeHandler} required label='Display Name'></FormInput>
          <FormInput type='email' name='email' value={this.state.email} handleChange={this.onChangeHandler} required label='Email'></FormInput>
          <FormInput type='password' name='password' value={this.state.password} handleChange={this.onChangeHandler} required label='Password'></FormInput>
          <FormInput type='password' name='confirmPassword' value={this.state.confirmPassword} handleChange={this.onChangeHandler} required label='Confirm Password'></FormInput>
          <div className='buttons'>
            <CustomButton type='submit'>Sign Up</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
