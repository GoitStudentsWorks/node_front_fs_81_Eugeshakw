import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/header/header';
import UserLogo from './../UserLogo/UserLogo';
import UserAuth from './../UserAuth/UserAuth';

const Layout = () => {
  const authToken = localStorage.getItem('AuthToken');
  const userPawned = authToken ? true : false;

  return (
    <Suspense>
      <Header>
        {userPawned ? <UserLogo /> : <UserAuth />}
      </Header>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
