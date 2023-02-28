import { Link } from 'react-router-dom';

export default function MenuItem({ children, active, to }) {
  return (
    <Link
      to={to}
      className={`${
        active ? 'text-white text-sm' : 'text-gray-400 hover:text-gray-500'
      }`}
    >
      {children}
    </Link>
  );
}
