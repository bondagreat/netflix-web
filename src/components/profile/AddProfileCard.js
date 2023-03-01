import { PlusIcon } from '../../images';

export default function AddProfileCard() {
  return (
    <div className="relative">
      <div className="w-[100px] h-[100px] bg-gray-300"></div>
      <button className="fill-white w-[100px] h-[100px] absolute top-0 left-0  bg-black/50 z-30 ">
        <div className="w-[100px] h-[100px] flex justify-center items-center">
          <PlusIcon />
        </div>
      </button>
      <span className="flex justify-center text-white">Add profile</span>
    </div>
  );
}
