import logo from '../../assets/logo.png';
import { NetflixTitleLogo } from '../../images';
import { ButtonHomepage } from '../homepages/ButtonHomepage';

export default function MovieShowcase() {
  return (
    <>
      <div className="bg-gray-500  w-full h-[900px] overflow-hidden ">
        <video className="w-full shadow-lg" autoPlay loop controls muted>
          <source
            src="https://cdn.akamai.steamstatic.com/steam/apps/256912617/movie480_vp9.webm?t=1666665303"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="absolute top-60 left-10 ">
        <div className="relative top-24">
          <div className=" absolute ">
            <NetflixTitleLogo />
          </div>
          <p className="absolute left-7 top-2 text-gray-300">Movies</p>
        </div>
        <div className="flex flex-col ">
          {/* logoMovie */}
          <div className="w-2/6 h-[360px] pt-36">
            <img
              src="https://res.cloudinary.com/dfeyolmc9/image/upload/v1678276423/resident-evil-54969d20239f4_fa1g8n.png"
              alt=""
            />
          </div>

          {/* description */}
          <p className="break-words w-[500px] line-clamp-3 text-white text-xl ">
            Underneath Raccoon City exists a genetic research facility called
            the Hive, owned by the Umbrella Corporation. A thief steals the
            genetically engineered T-virus and contaminates the Hive with it. In
            response, the facility's artificial intelligence, the Red Queen,
            seals the Hive and kills everyone inside.
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
        <p className="text-lg text-white ml-4">18+</p>
      </div>
    </>
  );
}
