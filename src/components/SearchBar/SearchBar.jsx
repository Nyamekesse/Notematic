import Input from 'components/Input/Input';
import React from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import style from './style.module.css';

const SearchBar = ({ onTextChange, placeHolder }) => {
  return (
    <div>
      <SearchIcon size={25} className={style.icon} />
      <Input onTextChange={onTextChange} placeHolder={placeHolder} />
    </div>
  );
};

export default SearchBar;
