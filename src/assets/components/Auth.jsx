import { useState, useRef, useContext } from 'react';
import AuthContext from './auth-store';
import { Navigate } from 'react-router-dom';
import classes from './AuthForm.module.css';


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [didLogin, setDidLogin] = useState(false);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const [request,setRequest] = useState(false);

  const authCtrx = useContext(AuthContext);

  console.log('Auth component - authCtrx:', authCtrx);
  console.log('Auth component - authCtrx.login:', authCtrx.login);

  if (didLogin) {
    return <Navigate to="/Home" replace />;
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const formHandler = async (e) => {
  e.preventDefault();

  let enteredEmail = inputEmail.current.value;
  let enteredPassword = inputPassword.current.value;

  if (enteredEmail === '' || enteredPassword === '') {
    alert('Please fill email and password');
    return;
  }

  setRequest(true);

  try {
    let url;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=`;
    }

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message);
    }

    const expiryTime = Date.now() + 10 * 60 * 1000;
    localStorage.setItem('expiryTime', expiryTime);
    console.log('About to call authCtrx.login with token:', data.idToken);
    authCtrx.login(data.idToken);
    console.log('After authCtrx.login, about to set didLogin');
    setDidLogin(true);
    console.log('didLogin set to true');
    console.log(data);
  } catch (err) {
    alert(err.message);
  } finally {
    inputEmail.current.value = "";
    inputPassword.current.value = "";
    setRequest(false);
  }
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={formHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={inputEmail} autoComplete='email' />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={inputPassword}
            autoComplete='current-password'
          />
        </div>
        <div className={classes.actions}>
          <button 
            type='submit'
            className={classes.toggle}>
            {request ? 'Sending Request...' : (isLogin ? 'Login' : 'Sign Up')}    
          </button>

          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Auth;
