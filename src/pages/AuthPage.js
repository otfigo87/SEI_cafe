import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

const AuthPage = ({setUser}) => {

  const [showLogin, setShowLogin] = useState(false)

  const onClickHandler = () => {
    setShowLogin(!showLogin)
  }

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={onClickHandler}>{showLogin ? "Login" : "Sign up"}</button>
      {
      showLogin ? <SignUpForm  setUser={setUser}/> :
      <LoginForm />
       }
    </div>
  )
}

export default AuthPage