import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MenuItem from './MenuItem';

export default function Menu() {
  const [currentUrl, setCurrentUrl] = useState('');
  const location = useLocation();
  useEffect(() => {
    const res = location?.pathname;
    setCurrentUrl(res);
  }, [location]);

  return (
    <div className="flex items-center gap-5 mt-3">
      <MenuItem
        to="/browse"
        className={
          currentUrl == '/browse'
            ? 'text-white text-sm'
            : 'text-gray-400 hover:text-gray-500'
        }
      >
        <p>Home</p>
      </MenuItem>

      <MenuItem
        to="/browse/latest"
        className={
          currentUrl == '/browse/latest'
            ? 'text-white text-sm'
            : 'text-gray-400 hover:text-gray-500'
        }
      >
        <p>Movies</p>
      </MenuItem>

      <MenuItem
        to="/browse/my-list"
        className={
          currentUrl == '/browse/my-list'
            ? 'text-white text-sm'
            : 'text-gray-400 hover:text-gray-500'
        }
      >
        <p>My List</p>
      </MenuItem>

      <MenuItem
        to="/browse/original-audio"
        className={
          currentUrl == '/browse/original-audio'
            ? 'text-white text-sm'
            : 'text-gray-400 hover:text-gray-500'
        }
      >
        <p>Browse by Languages</p>
      </MenuItem>
    </div>
  );
}

// active={location.pathname === ''}
