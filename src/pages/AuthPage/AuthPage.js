import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import { useState } from 'react';
import styles from './AuthPage.module.css';

const AuthPage = ({setUser}) => {

  const [showLogin, setShowLogin] = useState(true)

  const onClickHandler = () => {
    setShowLogin(!showLogin)
  }

  return (
    <main className={styles.AuthPage}>
      <div>
        <Logo />
        <h3 onClick={onClickHandler}>{showLogin ? "Sign up" : "Login"}</h3>
      </div>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}

export default AuthPage