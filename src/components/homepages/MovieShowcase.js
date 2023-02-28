import logo from '../../assets/logo.png';
import { ButtonHomepage } from '../homepages/ButtonHomepage';

export default function MovieShowcase() {
  return (
    <>
      <div className="bg-gray-500  w-full h-[900px] overflow-hidden ">
        <video className="w-full shadow-lg" autoPlay loop controls muted>
          <source
            src="https://cdn.akamai.steamstatic.com/steam/apps/256930504/movie480_vp9.webm?t=1676412591"
            type="video/mp4"
          />
        </video>
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
            and friends as they fight against the forces of Ronan and Thanos to
            protect the galaxy.
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
    </>
  );
}
