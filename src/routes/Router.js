import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EditProfile from '../components/profile/EditProfile';
import ManageProfile from '../components/profile/ManageProfile';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import RegisterPackage from '../components/register/RegisterPackage';
import RegisterPage from '../pages/RegisterPage';
import RegisterStepForm from '../components/register/RegisterStepForm';
import LandingPage from '../pages/LandingPage';
import RegisterPay from '../components/register/RegisterPay';
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import UserEditAccountPage from '../pages/UserEditAccountPage';
import CancelMemberShip from '../components/account/CancelMemberShip';
import AddProfile from '../components/profile/AddProfile';
import RedirectIfNotActive from '../features/auth/RedirectIfNotActive';
import MyListPage from '../pages/MyListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RedirectIfNotActive>
        <RedirectIfAuthenticate>
          <LandingPage />
        </RedirectIfAuthenticate>
      </RedirectIfNotActive>
    ),
  },
  {
    path: '/login',
    element: (
      <RedirectIfNotActive>
        <RedirectIfAuthenticate>
          <LoginPage />
        </RedirectIfAuthenticate>
      </RedirectIfNotActive>
    ),
  },
  {
    path: '/signup/regform',
    element: (
      <RedirectIfNotActive>
        <RedirectIfAuthenticate>
          <RegisterPage />
        </RedirectIfAuthenticate>
      </RedirectIfNotActive>
    ),
  },
  {
    path: '/signup/step',
    element: (
      <RedirectIfAuthenticate>
        <RegisterStepForm />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/signup/package',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPackage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/signup/payment',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPay />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/profiles',
    element: (
      <ProtectedRoute>
        <RedirectIfNotActive>
          <ProfilePage />
        </RedirectIfNotActive>
      </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/manage',
    element: (
      <ProtectedRoute>
        <RedirectIfNotActive>
          <ManageProfile />
        </RedirectIfNotActive>
      </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/edit',
    element: (
      <ProtectedRoute>
        <RedirectIfNotActive>
          <EditProfile />
        </RedirectIfNotActive>
      </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/add',
    element: (
      <ProtectedRoute>
        <RedirectIfNotActive>
          <AddProfile />
        </RedirectIfNotActive>
      </ProtectedRoute>
    ),
  },
  {
    path: '/user/account',
    element: <UserEditAccountPage />,
  },
  {
    path: '/member',
    element: <CancelMemberShip />,
  },
  {
    element: (
      <ProtectedRoute>
        <RedirectIfNotActive>
          <AuthLayout />
        </RedirectIfNotActive>
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/browse',
        element: <HomePage />,
      },
      {
        path: '/browse/latest',
        element: <h1>New & Popular</h1>,
      },
      {
        path: '/browse/my-list',
        element: <MyListPage />,
      },
      {
        path: '/browse/original-audio',
        element: <h1>Browse by Languages</h1>,
      },
      // {
      //   path: '/homepage',
      //   element: <HomePage />,
      // },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
