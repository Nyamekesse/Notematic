import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const withAuthRequired = (Component) => {
  return function ProtectedComponent() {
    const navigate = useNavigate();
    const { user } = useSelector((store) => store.AUTHSLICE.auth);
    useEffect(() => {
      if (!user) {
        navigate('/signin');
      }
    }, [user]);

    return user && <Component />;
  };
};
