// import { useLocation } from "react-router-dom";
import MenuItem from './MenuItem';

export default function Menu() {
  // const location = useLocation()
  return (
    <div className="flex items-center gap-5 mt-3">
      <MenuItem active>
        <p>Home</p>
      </MenuItem>
      <MenuItem>
        <p>Movies</p>
      </MenuItem>
      <MenuItem>
        <p>My List</p>
      </MenuItem>
      <MenuItem>
        <p>Browse by Languages</p>
      </MenuItem>
    </div>
  );
}

// active={location.pathname === ''}
