import React from 'react';
import style from './style.module.css';

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button type="button" className={`btn btn-primary ${style.button}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
