import { LockIcon } from '../../images';

export default function ProfileCard({ id, name, profileImg, pin }) {
  // onClick show homepage
  return (
    <button>
      <img className="w-[100px] h-[100px]" src={profileImg} alt={id} />
      <span className="flex justify-center text-white">{name}</span>
      <div className="w-4 h-4 mt-5 mx-auto">{pin && <LockIcon />}</div>
    </button>
  );
}
