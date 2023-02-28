import { EditIcon, LockIcon } from '../../images';

export default function ManageProfileCard({ id, name, profileImg, pin }) {
  // onclick show modal edit profile

  return (
    <button className="relative">
      <img className="w-[100px] h-[100px]" src={profileImg} alt={id} />
      <div className="fill-white w-[100px] h-[100px] absolute top-0 left-0  bg-black/50 z-30 ">
        <div className="absolute top-10 left-10 w-7 h-7 ">
          <EditIcon />
        </div>
      </div>
      <span className="flex justify-center text-white">{name}</span>
      <div className="w-4 h-4 mt-5 mx-auto">{pin && <LockIcon />}</div>
    </button>
  );
}
