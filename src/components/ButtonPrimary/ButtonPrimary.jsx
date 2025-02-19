import React from 'react';
import style from './style.module.css';

const ButtonPrimary = ({ className, children, onClick, isDisabled, type }) => {
  return (
    <button type={type || 'button'} className={`btn btn-primary ${style.button} ${className}`} onClick={onClick} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
