import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditProfile from '../components/profile/EditProfile';
import ManageProfile from '../components/profile/ManageProfile';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPackage from '../features/Auth/RegisterPackage';
import RegisterPage from '../pages/RegisterPage';
import RegisterStepForm from '../features/Auth/RegisterStepForm';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import RegisterPay from '../features/Auth/RegisterPay';
import RegisterInputPay from '../features/Auth/RegisterInputPay';
import ProfilePage from '../pages/ProfilePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: (
      <RedirectIfAuthenticate>
        <LoginPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/register',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerStep',
    element: (
      <RedirectIfAuthenticate>
        <RegisterStepForm />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerPackage',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPackage />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerPay',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPay />,
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerInputPay',
    element: (
      <RedirectIfAuthenticate>
        <RegisterInputPay />,
      </RedirectIfAuthenticate>
    ),
  },

  {
    element: (
      // <ProtectedRoute>
      <AuthLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: '/browse',
        element: <h1>Profile + home</h1>,
      },
      {
        path: '/browse/latest',
        element: <h1>New & Popular</h1>,
      },
      {
        path: '/browse/my-list',
        element: <h1>My List</h1>,
      },
      {
        path: '/browse/original-audio',
        element: <h1>Browse by Languages</h1>,
      },

      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/ManageProfile',
        element: <ManageProfile />,
      },
      {
        path: '/EditProfile',
        element: <EditProfile />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
