// import { useLocation } from "react-router-dom";
import MenuItem from './MenuItem';

export default function Menu() {
  // const location = useLocation()
  return (
    <div className="flex items-center gap-5 mt-3">
      <MenuItem to="/homepage" active>
        <p>Home</p>
      </MenuItem>
      <MenuItem to="/movies">
        <p>Movies</p>
      </MenuItem>
      <MenuItem to="/mylist">
        <p>My List</p>
      </MenuItem>
      <MenuItem to="/browse">
        <p>Browse by Languages</p>
      </MenuItem>
    </div>
  );
}

// active={location.pathname === ''}
