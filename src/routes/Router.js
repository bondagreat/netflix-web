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
import AdminEditMoviePage from '../pages/AdminEditMoviePage';
import AdminCreateMovieFirstPage from '../pages/AdminCreateMovieFirstPage';
import LoginAdminPage from '../pages/LoginAdminPage';
import AdminEditVideoPage from '../pages/AdminEditVideoPage';
import AdminEditTrailerPage from '../pages/AdminEditTrailerPage';
import AdminCreateMovieSecondPage from '../pages/AdminCreateMovieSecondPage';
import AdminCreateMovieThirdPage from '../pages/AdminCreateMovieThirdPage';
import AddProfile from '../components/profile/AddProfile';
import AdminManageMoviePage from '../pages/AdminManageMoviePage';
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
    path: '/loginAdmin',
    element: (
      // <RedirectIfAuthenticate>
      <LoginAdminPage />
      // </RedirectIfAuthenticate>
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
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
