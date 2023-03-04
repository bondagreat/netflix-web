import { useSelector } from 'react-redux';
import AddProfileCard from '../components/profile/AddProfileCard';
import ManageProfileButton from '../components/profile/ManageProfileButton';
import ProfileCard from '../components/profile/ProfileCard';

export default function ProfilePage() {
  const userProfiles = useSelector((state) => state.auth.user?.Profiles);

  return (
    <>
      <div className="h-screen flex justify-center flex-col bg-black">
        <div className="flex justify-center mt-10">
          <h1 className="text-white text-5xl">Who's watching?</h1>
        </div>
        <div className="flex justify-center gap-5 mt-6">
          {userProfiles?.map((el) => {
            return (
              <ProfileCard
                key={el?.id}
                id={el?.id}
                name={el?.name}
                profileImg={el?.profileImg}
                pin={el?.pin}
              />
            );
          })}
          {userProfiles?.length < 4 && <AddProfileCard />}
        </div>
        <ManageProfileButton />
      </div>
    </>
  );
}
