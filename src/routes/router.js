import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterPackage from '../features/Auth/RegisterPackage';
import RegisterStepForm from '../features/Auth/RegisterStepForm';
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
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
