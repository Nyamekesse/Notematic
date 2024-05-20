import { AuthAPI } from 'api/auth';
import ButtonPrimary from 'components/ButtonPrimary/ButtonPrimary';
import Input from 'components/Input/Input';
import AuthLayout from 'layouts/AuthLayout/AuthLayout';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from 'store/auth/auth-slice';
import { toast } from 'utils/sweet-alert';
import style from './style.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const submit = async (event) => {
    event.preventDefault();
    if (password === passwordRepeat) {
      try {
        const user = await AuthAPI.signup(email, password);
        dispatch(setUser(user));
        await toast('success', 'Signup succeed, you are now logged in.');
        navigate('/');
      } catch (error) {
        console.log('Auth failed');
        toast('error', error.message);
      }
    } else {
      toast('error', "Password don't match!");
    }
  };
  const form = (
    <div className={style.formContainer}>
      <h2 className={style.title}>
        Signup <br /> to access your team notes.
      </h2>
      <form onSubmit={submit} className={style.formGroup}>
        <Input placeHolder="Email" onTextChange={setEmail} />
        <Input placeHolder="Password" type="password" onTextChange={setPassword} />
        <Input placeHolder="Password (repeat)" type="password" onTextChange={setPasswordRepeat} />
        <ButtonPrimary type="submit" className={style.button}>
          Sign Up!
        </ButtonPrimary>
        <span>
          Already have an account <Link to="/signin">Signin</Link>
        </span>
      </form>
    </div>
  );
  return <AuthLayout>{form}</AuthLayout>;
};

export default SignUp;
