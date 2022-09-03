import React from "react";
import { SigninContainer, ButtonsContainer } from "./styles";
import { FormInput } from "../FormInput";
import Button, { BUTTON_TYPE_CLASSES } from "../Button";
import { useDispatch } from "react-redux";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.actions";

const Signin = () => {
  const form = React.useRef(null);
  const dispatch = useDispatch();

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    dispatch(emailSignInStart(userData.email, userData.password));
  };

  return (
    <SigninContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password or Google</span>
      <form onSubmit={handleSubmit} ref={form}>
        <FormInput name="email" type="email" label="Email" required />
        <FormInput name="password" type="password" label="Password" required />
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
