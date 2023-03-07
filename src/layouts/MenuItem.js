import { Link } from 'react-router-dom';

export default function MenuItem({ children, className, to }) {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}
