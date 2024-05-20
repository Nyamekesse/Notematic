import { AuthAPI } from 'api/auth';
import { Logo } from 'components/logo';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectUser } from 'store/auth/auth-selectors';
import { setUser } from 'store/auth/auth-slice';
import logoImg from '../../assets/images/logo.png';
import style from './style.module.css';

const Header = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signOut = () => {
    AuthAPI.signout();
    dispatch(setUser(null));
  };
  const renderAuthProfile = () => {
    return (
      <div>
        <img src={`https://api.dicebear.com/5.x/bottts/svg?seed=${user.email}`} style={{ width: 40 }} className="rounded-circle" />
        <div>Hello, {user.email}</div>
        <Link to="#" onClick={signOut}>
          Sign Out
        </Link>
      </div>
    );
  };
  return (
    <div className={`row ${style.container}`}>
      <div className="col-xs-12 col-sm-4">
        <Logo title="Notomatic" subtitle="Manage your notes" image={logoImg} onClick={() => navigate('/')} />
      </div>
      <div className="col-xs-12 col-sm-8 text-end">{renderAuthProfile()}</div>
    </div>
  );
};

export default Header;
