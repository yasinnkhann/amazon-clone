import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebaseConfig.js';
import '../styles/Login.css';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // it successfully created a new user with email and password
        if (auth) {
          history.push('/');
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='amazon logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button
            className='login__signInButton'
            type='submit'
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing in, you agree to the AMAZON FAKE CLONE's Conditions of Use
          & Sales. Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
