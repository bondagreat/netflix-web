import { Link } from 'react-router-dom';
import { NetflixLogo } from '../images';

export default function Brand() {
  return (
    <Link to={'/browse'} className="px-10">
      <NetflixLogo />
    </Link>
  );
}
