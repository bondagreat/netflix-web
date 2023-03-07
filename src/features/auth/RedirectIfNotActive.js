import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function RedirectIfNotActive({ children }) {
  const authUser = useSelector((state) => state.auth.user?.isActive);
  if (authUser === false) {
    return <Navigate to={'/signup/step'} />;
  }
  return children;
}
