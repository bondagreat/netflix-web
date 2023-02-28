import { Link } from 'react-router-dom';

export default function ManageProfileButton() {
  return (
    <div className="flex justify-center mt-16">
      <button className="border-2 border-white  text-white py-1 px-3">
        <Link to={'/ManageProfiles'}>Manage Profiles</Link>
      </button>
    </div>
  );
}
