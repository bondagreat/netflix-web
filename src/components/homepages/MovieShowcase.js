import { useEffect, useState } from 'react';
import { getVideo } from '../../apis/movie-api';
import logo from '../../assets/logo.png';
import FetchVideo from '../../utils/fetch-video';
import { NetflixTitleLogo } from '../../images';
import { ButtonHomepage } from '../homepages/ButtonHomepage';
import * as movieApi from '../../apis/movie-api';
import useFetchVideo from '../../utils/fetch-video';

export default function MovieShowcase() {
  const movieId = 13;
  const url = useFetchVideo(movieId, 'video-player');

  return (
    <>
      <div className="bg-gray-500  w-full h-[900px] overflow-hidden ">
        <video
          id="video-player"
          className="w-full aspect-video shadow-lg"
          autoPlay
          loop
          controls
          muted
        >
          <source src={url} type="video/mp4" />
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
