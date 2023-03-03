import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddProfileCard from './AddProfileCard';
import ManageProfileCard from './ManageProfileCard';

export default function ManageProfile() {
  const userProfiles = useSelector((state) => state.auth.user?.Profiles);

  return (
    <>
      <div className=" h-screen flex justify-center flex-col bg-black">
        <div className="flex justify-center mt-10">
          <h1 className="text-white text-4xl">Manage Profiles:</h1>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          {userProfiles?.map((el) => {
            return (
              <ManageProfileCard
                key={el.id}
                id={el.id}
                name={el.name}
                profileImg={el.profileImg}
                pin={el.pin}
              />
            );
          })}
          {userProfiles?.length < 4 && <AddProfileCard />}
        </div>
        <div className="flex justify-center mt-14">
          <button className=" bg-white hover:bg-red-700 hover:text-white text-black py-1 px-5">
            <Link to={'/profiles'}>Done</Link>
          </button>
        </div>
      </div>
    </>
  );
}
