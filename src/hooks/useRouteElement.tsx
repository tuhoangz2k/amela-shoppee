import { useRoutes } from 'react-router-dom';
import { routePaths } from '../constants';
import Login from 'pages/LoginPage';
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/RegisterPage';
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
  ]);

  return elements;
};

export default useRouteElement;
