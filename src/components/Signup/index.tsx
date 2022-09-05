import React, { FormEvent, ChangeEvent } from "react";
import { AuthError, AuthErrorCodes } from 'firebase/auth'
import Button from "../Button";
import { FormInput } from "../FormInput";
import { SignupContainer } from './styles'
import { useDispatch } from "react-redux";
import { signUpStart } from '../../store/user/user.actions'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const Signup = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(password !== confirmPassword){
        alert('Password do not match!')
        return;
    }

    try {
      dispatch(signUpStart(email, password, displayName))
    } catch (error) {
        if((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
            alert('Cannot create user, email already in use')
        }else {
            console.log('User creation encountered an error', error)
        }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignupContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          onChange={handleChange} 
          value={displayName} 
          name="displayName" 
          type="text" 
          required 
          label='Display Name' />
        <FormInput
          onChange={handleChange}
          value={email} 
          name="email" 
          type="email" 
          required 
          label='Email' />
        <FormInput 
          onChange={handleChange}
          value={password} 
          name="password" 
          type="password" 
          required 
          label='Password' />
        <FormInput
          onChange={handleChange}
          value={confirmPassword} 
          name="confirmPassword" 
          type="password" 
          required 
          label='Confirm password' />
        <Button type='submit'>
          Sign Up
        </Button>
      </form>
    </SignupContainer>
  );
};

export { Signup };
