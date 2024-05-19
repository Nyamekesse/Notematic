import { AuthAPI } from 'api/auth';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import Input from 'components/Input/Input';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from 'store/auth/auth-slice';
import style from './style.module.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const submit = async (event) => {
    event.preventDefault();
    try {
      const user = await AuthAPI.signin(email, password)
   dispatch(setUser(user))
    } catch (error) {
      console.log("Auth failed");
    }
   
  };
  const form = (
    <div className={style.formContainer}>
      <h2 className={style.title}>
        Signin <br /> to access your team notes.
      </h2>
      <form onSubmit={submit} className={style.formGroup}>
        <Input placeHolder="Email" onTextChange={setEmail} />
        <Input placeHolder="Password" type="password" onTextChange={setPassword} />
        <ButtonPrimary type="submit" className={style.button}>
          Sign in!
        </ButtonPrimary>
        <span>
          Don't have an account yet? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
};

export default SignIn;
