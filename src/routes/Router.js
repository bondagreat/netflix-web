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
import AdminManageAccountPage from '../pages/AdminManageAccountPage';
import AdminEditMoviePage from '../pages/AdminEditMoviePage';
import AdminCreateMovieFirstPage from '../pages/AdminCreateMovieFirstPage';
import LoginAdminPage from '../pages/LoginAdminPage';
import AdminEditVideoPage from '../pages/AdminEditVideoPage';
import AdminEditTrailerPage from '../pages/AdminEditTrailerPage';
import AdminCreateMovieSecondPage from '../pages/AdminCreateMovieSecondPage';
import AdminCreateMovieThirdPage from '../pages/AdminCreateMovieThirdPage';

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
        <RegisterStepForm />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerPackage',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPackage />
      </RedirectIfAuthenticate>
    ),
  },
  {
    path: '/registerPay',
    element: (
      <RedirectIfAuthenticate>
        <RegisterPay />
      </RedirectIfAuthenticate>
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
      {
        path: '/homepage',
        element: <HomePage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
