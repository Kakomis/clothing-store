import React, { FormEvent, ChangeEvent } from "react";
import { SigninContainer, ButtonsContainer } from "./styles";
import { FormInput } from "../FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.actions";

const defaultFormFields = {
  email: '',
  password: '',
};

const Signin = () => {
  const [formFields, setFormFields] = React.useState(defaultFormFields);
  const { email, password } = formFields;
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(emailSignInStart(email, password));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({...formFields, [name]: value})
  }

  return (
    <SigninContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password or Google</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SigninContainer>
  );
};

export default Signin;
