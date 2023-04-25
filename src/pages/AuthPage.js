import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import { useState } from 'react';

const AuthPage = ({setUser}) => {

  const [showLogin, setShowLogin] = useState(true)

  const onClickHandler = () => {
    setShowLogin(!showLogin)
  }

  return (
    <main className="AuthPage">
      <h1 >Auth Page</h1>
      <button onClick={onClickHandler}>
        {showLogin ? "Sign up" : "Login"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage