import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/login",
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
