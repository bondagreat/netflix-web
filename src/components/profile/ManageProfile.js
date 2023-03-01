import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AddProfileCard from './AddProfileCard';
import ManageProfileCard from './ManageProfileCard';

export default function ManageProfile() {
  const userProfiles = useSelector((state) => state.user.profile?.Profiles);

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
          <button className="border-2 border-white bg-white  text-black  px-3">
            <Link to={'/profile'}>Done</Link>
          </button>
        </div>
      </div>
    </>
  );
}
