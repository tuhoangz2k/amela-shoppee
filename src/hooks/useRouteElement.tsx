import { useRoutes } from 'react-router-dom';
import { routePaths } from '../constants';
import Login from 'pages/LoginPage';
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/RegisterPage';
import MainLayout from 'layouts/MainLayout';
import ProfilePage from 'pages/ProfilePage';
const useRouteElement = () => {
  const elements = useRoutes([
    {
      path: routePaths.login,
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      ),
    },
    {
      path: routePaths.register,
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      ),
    },
    {
      path: routePaths.profile,
      element: (
        <MainLayout>
          <ProfilePage />
        </MainLayout>
      ),
    },
  ]);

  return elements;
};

export default useRouteElement;
