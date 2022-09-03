import React from 'react'
import Signin from '../../components/Signin'
import { Signup } from '../../components/Signup'
import { LoginContainer } from './styles'
import { useSelector } from 'react-redux'
import { selectError } from '../../store/user/user.selector'

const Login = () => {
  const signInError = useSelector(selectError);

  React.useEffect(() => {
    if (signInError) {
      alert(signInError);
    }
  }, [signInError]);

  return (
    <LoginContainer>
      <Signin />
      <Signup />
    </LoginContainer>
  )
}

export { Login }
