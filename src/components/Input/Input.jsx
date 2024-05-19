import React from 'react';
import style from './style.module.css';

const Input = ({ type, onTextChange, placeHolder }) => {
  return <input type={type || 'text'} className={style.input} onChange={(event) => onTextChange(event.target.value)} placeholder={placeHolder} />;
};

export default Input;
