import { Logo } from 'components/logo';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import style from './style.module.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className={`row ${style.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo title="Notomatic" subtitle="Manage your notes" image={logoImg} onClick={() => navigate('/')} />
      </div>
      <div className="col-xs-12 col-sm-8 text-end"></div>
    </div>
  );
};

export default Header;
