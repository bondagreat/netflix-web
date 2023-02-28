import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { AddButton, Dot, MoreInfoButton, PlayButton } from '../../images';

import { useState } from 'react';
import { MediaButton } from './MediaButton';

export function MovieList({ changeCurrentMovie }) {
  const [showButton, setShowButton] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  return (
    <>
      <div className="">
        <h1 className="absolute text-white text-2xl ">My List</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img2} className="rounded-lg" />
              {showButton && (
                <MediaButton changeCurrentMovie={changeCurrentMovie} />
              )}
            </div>
            <div
              onMouseEnter={() => setShowButton2(true)}
              onMouseLeave={() => setShowButton2(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img1} className="rounded-lg" />
              {showButton && <MediaButton />}
            </div>
            <div
              onMouseEnter={() => setShowButton2(true)}
              onMouseLeave={() => setShowButton2(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="">
        <h1 className="absolute text-white text-2xl ">New Release</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="">
        <h1 className="absolute text-white text-2xl ">Thrillers & Horror</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="">
        <h1 className="absolute text-white text-2xl ">Comedies</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="">
        <h1 className="absolute text-white text-2xl ">Cartoons</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
          <div className=" w-full h-[250px] flex gap-2 items-center">
            <div
              onMouseEnter={() => setShowButton(true)}
              onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
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
              {showButton2 && <MediaButton />}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
            <div
              // onMouseEnter={() => setShowButton(true)}
              // onMouseLeave={() => setShowButton(false)}
              className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
            >
              <img src={img3} className="rounded-lg" />
              {/* {showButton && <MediaButton />} */}
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
