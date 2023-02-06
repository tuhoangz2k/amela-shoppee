import { useRoutes } from 'react-router-dom';
import { routePaths } from '../constants';
import Login from 'pages/LoginPage';
import AuthLayout from 'layouts/AuthLayout';
import Register from 'pages/RegisterPage';
import MainLayout from 'layouts/MainLayout';
import ProfilePage from 'pages/ProfilePage';
import HomePage from 'pages/HomePage';
import ProductPage from 'pages/ProductPage';
import CartPage from 'pages/CartPage';
import DetailPage from 'pages/DetailPage';
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
    {
      path: routePaths.home,
      element: (
        <MainLayout>
          <HomePage />
        </MainLayout>
      ),
    },
    {
      path: routePaths.products,
      element: (
        <MainLayout>
          <ProductPage />
        </MainLayout>
      ),
    },
    {
      path: routePaths.cart,
      element: (
        <MainLayout>
          <CartPage />
        </MainLayout>
      ),
    },
    {
      path: routePaths.detail,
      element: (
        <MainLayout>
          <DetailPage />
        </MainLayout>
      ),
    },
  ]);

  return elements;
};

export default useRouteElement;
