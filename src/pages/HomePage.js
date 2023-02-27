import bg from '../assets/bg.jpg';
import { DropdownGenres } from '../components/DropdownGenres';

export default function HomePage() {
  return (
    <>
      <div className="bg-black h-[1200px]">
        <img src={bg} alt="1" className="" />
        <div className="fixed inline-block top-24 left-9">
          <p className="sticky text-white text-4xl top-0">Movies</p>
        </div>
        <DropdownGenres />
        <div></div>
      </div>
    </>
  );
}
