import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditProfile from '../components/profile/EditProfile';
import ManageProfile from '../components/profile/ManageProfile';
import ProtectedRoute from '../features/auth/ProtectedRoute';
import RedirectIfAuthenticate from '../features/auth/RedirectIfAuthenticate';
import AuthLayout from '../layouts/AuthLayout';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import LandingPage from '../pages/LandingPage';

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
    )
  },
  {
    path: "/register",
    element: (
      <RedirectIfAuthenticate>
        <RegisterPage />
      </RedirectIfAuthenticate>
    )
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
    element: (
      <AuthLayout />
      // <ProtectedRoute>
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/browse",
        element: <h1>Profile + home</h1>
      },
      {
        path: "/browse/latest",
        element: <h1>New & Popular</h1>
      },
      {
        path: "/browse/my-list",
        element: <h1>My List</h1>
      },
      {
        path: "/browse/original-audio",
        element: <h1>Browse by Languages</h1>
      }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
