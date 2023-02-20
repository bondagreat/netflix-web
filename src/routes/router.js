import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPackage from '../features/Auth/RegisterPackage';
import RegisterStepForm from '../features/Auth/RegisterStepForm';
import GetStartPage from '../pages/GetStartPage';
import LoginAdminPage from '../pages/LoginAdminPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/registerstep',
    element: <RegisterStepForm />,
  },
  {
    path: '/registerpackage',
    element: <RegisterPackage />,
  },
  {
    path: '/getstart',
    element: <GetStartPage />,
  },
  {
    path: '/loginadmin',
    element: <LoginAdminPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
