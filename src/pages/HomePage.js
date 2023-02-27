import logo from '../assets/logo.png';
import { ButtonHomepage } from '../components/homepages/ButtonHomepage';
import { DropdownGenres } from '../components/homepages/DropdownGenres';
import { Modal } from '../components/homepages/Modal';
import { MovieList } from '../components/homepages/MovieList';
import { NetflixTitleLogo } from '../images';

export default function HomePage() {
  return (
    <>
      {/* <Modal /> */}
      <div className="absolute top-[770px]  left-0 right-0 bg-gradient-to-t from-black h-[130px] "></div>
      <div className="bg-black ">
        <div className="bg-gray-500  w-full h-[900px] overflow-hidden ">
          <video className="w-full shadow-lg" autoPlay loop controls muted>
            <source
              src="https://cdn.akamai.steamstatic.com/steam/apps/256930504/movie480_vp9.webm?t=1676412591"
              type="video/mp4"
            />
          </video>
          {/* <img src={bg} className="w-full h-full object-cover" alt="" /> */}
        </div>

        <div className="absolute top-60 left-10 ">
          <div className="flex flex-col ">
            {/* logoMovie */}
            <div className="w-2/6 h-[360px]">
              <img src={logo} alt="" />
            </div>

            {/* description */}
            <p className="break-words w-[500px] text-white text-xl ">
              The Guardians leave us with lessons on love, laughter, fun, family
              and friends as they fight against the forces of Ronan and Thanos
              to protect the galaxy.
            </p>
            <div className="flex gap-5 mt-4">
              <div className="flex justify-center ">
                <div className="dropdown relative">
                  <ButtonHomepage />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* rate */}
        <div className="absolute top-[600px] right-0 bg-gray-500 bg-opacity-50 py-1 w-24 border-l-4">
          <p className="text-lg text-white ml-4">16+</p>
        </div>

        <div className="fixed inline-block top-24 left-9 z-20">
          <p className="sticky text-white text-4xl top-0">Movies</p>
        </div>
        <DropdownGenres />

        {/* MovieList */}
        <div className="relative    bottom-[150px] z-10  ml-10 w-[1650px]">
          <MovieList />
        </div>

        <div className="relative ">
          <div className="absolute top-[26%] left-8 ">
            <NetflixTitleLogo />
          </div>
          <p className="absolute  top-[28%] left-20 text-gray-300">Movies</p>
        </div>
      </div>
    </>
  );
}
