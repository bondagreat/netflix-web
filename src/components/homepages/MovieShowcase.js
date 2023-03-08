import { useEffect, useState } from 'react';
import { getVideo } from '../../apis/movie-api';
import logo from '../../assets/logo.png';
import FetchVideo from '../../utils/fetch-video';
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
