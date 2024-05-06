import React from 'react';
import style from './style.module.css';

const ButtonPrimary = ({ children, onClick, isDisabled }) => {
  return (
    <button type="button" className={`btn btn-primary ${style.button}`} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
