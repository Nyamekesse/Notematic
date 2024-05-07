import React from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';
import style from './style.module.css';

const SearchBar = ({ onTextChange, placeHolder }) => {
  return (
    <div>
      <SearchIcon size={25} className={style.icon} />
      <input type="text" className={style.input} onChange={(event) => onTextChange(event.target.value)} placeholder={placeHolder} />
    </div>
  );
};

export default SearchBar;
