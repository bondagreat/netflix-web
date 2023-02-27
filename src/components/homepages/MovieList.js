import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { AddButton, Dot, MoreInfoButton, PlayButton } from '../../images';

import { useState } from 'react';
import { MediaButton } from './MediaButton';

export function MovieList() {
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  return (
    <>
      <div className="">
        <h1 className="absolute text-white text-2xl mb-4">Trending Now</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[230px] flex gap-2 items-center">
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className="relative w-1/6 hover:translate-x-10  hover:scale-125 ease-in duration-100 hover:shadow-xl"
            >
              <img src={img1} className="rounded-t-md" />
              {/* {showButton && (
                <div className="bg-gray-900  rounded-b-md p-3 flex flex-col justify-center">
                  <div className="flex justify-between pt-1">
                    <div>
                      <button className="hover:opacity-90">
                        <PlayButton />
                      </button>
                      <button className="stroke-gray-500 hover:stroke-white">
                        <AddButton />
                      </button>
                    </div>
                    <div>
                      <button className="stroke-gray-500 hover:stroke-white">
                        <MoreInfoButton />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="ml-1 border-2 border-gray-500 text-white text-xs px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-xs">2h 1m</p>
                  </div>
                  <div className="flex justify-start w-48 text-white text-xs ml-1 mt-3">
                    <button>Quirky</button>
                    <p className="flex items-center">
                      <Dot />
                    </p>
                    <button>Feel-Good</button>
                    <p className="flex items-center">
                      <Dot />
                    </p>
                    <button>Musical</button>
                  </div>
                </div>
              )} */}
            </div>
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img2} className="rounded-lg" />
              {showButton && <MediaButton />}
            </div>
            <div
              onMouseEnter={() => setShowButton2(true)}
              onMouseLeave={() => setShowButton2(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {showButton2 && (
                <div className="absolute  bg-gradient-to-t from-gray-500 w-[275px] bottom-0 rounded-b-md px-3 pb-1 flex flex-col justify-center translate-y-0 duration-300">
                  <div className="flex justify-end pt-1">
                    <button className="opacity-70 hover:opacity-100 active:opacity-50">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <MoreInfoButton />
                    </button>
                  </div>
                  <div className="flex justify-end gap-2 mt-1 pr-2">
                    <button className=" border-2 border-gray-100 text-white text-xs px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-xs">2h 1m</p>
                  </div>
                  <div className="flex justify-end w-full text-white text-xs">
                    <button>Quirky</button>
                    <p className="flex items-center">
                      <Dot />
                    </p>
                    <button>Feel-Good</button>
                    <p className="flex items-center">
                      <Dot />
                    </p>
                    <button>Musical</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
