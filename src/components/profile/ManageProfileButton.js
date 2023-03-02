import { Link } from 'react-router-dom';

export default function ManageProfileButton() {
  return (
    <div className="flex justify-center mt-16">
      <button className="border-2 border-gray-500 text-gray-500 hover:border-white hover:text-white py-1 px-3">
        <Link to={'/ManageProfiles'}>Manage Profiles</Link>
      </button>
    </div>
  );
}
