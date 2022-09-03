import React from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase";
import Button from "../Button";
import { FormInput } from "../FormInput";
import { SignupContainer } from './styles'
import { useDispatch } from "react-redux";
import { signUpStart } from '../../store/user/user.actions'

const Signup = () => {
  const form = React.useRef(null);
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const userData = {
      displayName: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("conpassword"),
    };

    if(userData.password !== userData.confirmPassword){
        alert('Password do not match!')
        return;
    }

    try {
      dispatch(signUpStart(userData))
    } catch (error) {
        if(error.code === 'auth/email-already-in-use') {
            alert('Cannot create user, email already in use')
        }else {
            console.log('User creation encountered an error', error.message)
        }
    }
  };

  return (
    <SignupContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} ref={form}>
        <FormInput name="name" type="text" required label='Display Name' />
        <FormInput name="email" type="email" required label='Email' />
        <FormInput name="password" type="password" required label='Password' />
        <FormInput name="conpassword" type="password" required label='Confirm password' />
        <Button type='submit'>
          Sign Up
        </Button>
      </form>
    </SignupContainer>
  );
};

export { Signup };
