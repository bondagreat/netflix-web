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
import AdminSeeTransactionPage from '../pages/AdminSeeTransactionPage';
import AdminManageAccountPage from '../pages/AdminManageAccountPage';
import AdminManageMoviePage from '../pages/AdminManageMoviePage';
import AdminEditMoviePage from '../pages/AdminEditMoviePage';
import AdminCreateMovieFirstPage from '../pages/AdminCreateMovieFirstPage';
import LoginAdminPage from '../pages/LoginAdminPage';
import AdminEditVideoPage from '../pages/AdminEditVideoPage';
import AdminEditTrailerPage from '../pages/AdminEditTrailerPage';
import AdminCreateMovieSecondPage from '../pages/AdminCreateMovieSecondPage';
import AdminCreateMovieThirdPage from '../pages/AdminCreateMovieThirdPage';
import UserEditAccountPage from '../pages/UserEditAccountPage';
import CancelMemberShip from '../components/account/CancelMemberShip';
import AdminManageMoviePage from '../pages/AdminManageMoviePage';
import AddProfile from '../components/profile/AddProfile';
import { TableAccount } from '../components/adminpages/TableAccount';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RedirectIfAuthenticate>
        <LandingPage />
      </RedirectIfAuthenticate>
    ),
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
    path: '/signup/regform',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/signup/step',
    element: (
      // <RedirectIfAuthenticate>
      <RegisterStepForm />
      // </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/signup/package',
    element: (
      // <RedirectIfAuthenticate>
      <RegisterPackage />
      // </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/signup/payment',
    element: (
      // <RedirectIfAuthenticate>
      <RegisterPay />
      // </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/profiles',
    element: (
      // <ProtectedRoute>
      <ProfilePage />
      // </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/manage',
    element: (
      // <ProtectedRoute>
      <ManageProfile />
      // </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/edit',
    element: (
      // <ProtectedRoute>
      <EditProfile />
      // </ProtectedRoute>
    ),
  },
  {
    path: '/profiles/add',
    element: (
      // <ProtectedRoute>
      <AddProfile />
      // </ProtectedRoute>
    ),
  },
  {
    path: '/loginAdmin',
    element: (
      <RedirectIfAuthenticate>
        <LoginAdminPage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/adminSeeTransaction',
    element: <AdminSeeTransactionPage />,
  },
  {
    path: '/adminManageAccount',
    element: <AdminManageAccountPage />,
  },
  {
    path: '/adminEditMovies',
    element: <AdminEditMoviePage />,
  },
  {
    path: '/adminEditVideo',
    element: <AdminEditVideoPage />,
  },
  {
    path: '/adminEditTrailer',
    element: <AdminEditTrailerPage />,
  },
  {
    path: '/adminCreateMovieFirstPage',
    element: <AdminCreateMovieFirstPage />,
  },
  {
    path: '/adminCreateMovieSecondPage',
    element: <AdminCreateMovieSecondPage />,
  },
  {
    path: '/adminCreateMovieThirdPage',
    element: <AdminCreateMovieThirdPage />,
  },

  {
    path: '/adminManageMovie',
    element: <AdminManageMoviePage />,
  },
  // {
  //   path: '/tableAccount',
  //   element: <TableAccount />,
  // },
  {
    path: '/userEditAccount',
    element: <UserEditAccountPage />,
  },
  {
    path: '/cancelMember',
    element: <CancelMemberShip />,
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
