import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';
import { MediaButton } from './MediaButton';

export function MovieList({ changeCurrentMovie, allMovies }) {
  const [showButton, setShowButton] = useState(false);

  const set1 = allMovies?.slice(0, 1);
  const set2 = allMovies?.slice(1, 5);
  const set3 = allMovies?.slice(5, 6);
  // const set4 = allMovies?.slice(6, 7);
  // const set5 = allMovies?.slice(7, 11);
  // const set6 = allMovies?.slice(11, 12);
  // const set7 = allMovies?.slice(12, 13);
  // const set8 = allMovies?.slice(13, 17);
  // const set9 = allMovies?.slice(18, 19);

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
            {set1?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && (
                  <MediaButton changeCurrentMovie={changeCurrentMovie} />
                )}
              </div>
            ))}
            {set2?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
            {set3?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
          </div>
          {/* <div className=" w-full h-[250px] flex gap-2 items-center">
            {set4?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && (
                  <MediaButton changeCurrentMovie={changeCurrentMovie} />
                )}
              </div>
            ))}
            {set5?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
            {set6?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
          </div> */}
          {/* <div className=" w-full h-[250px] flex gap-2 items-center">
            {set7?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && (
                  <MediaButton changeCurrentMovie={changeCurrentMovie} />
                )}
              </div>
            ))}
            {set8?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
            {set9?.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
          </div> */}
        </Carousel>
      </div>
      {/* <div className="">
        <h1 className="absolute text-white text-2xl ">New Release</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          <div className=" w-full h-[250px] flex gap-2 items-center">
            {set1.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && (
                  <MediaButton changeCurrentMovie={changeCurrentMovie} />
                )}
              </div>
            ))}
            {set2.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton2(true)}
                onMouseLeave={() => setShowButton2(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton2 && <MediaButton />}
              </div>
            ))}
            {set3.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton2(true)}
                onMouseLeave={() => setShowButton2(false)}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
              </div>
            ))}
          </div>

          <div className=" w-full h-[250px] flex gap-2 items-center">
            {set1.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
            {set2.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton2(true)}
                onMouseLeave={() => setShowButton2(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton2 && <MediaButton />}
              </div>
            ))}
            {set3.map((item, id) => (
              <div
                key={id}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
              </div>
            ))}
          </div>

          <div className=" w-full h-[250px] flex gap-2 items-center">
            {set1.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton(true)}
                onMouseLeave={() => setShowButton(false)}
                className=" flex w-1/6 hover:translate-x-20 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton && <MediaButton />}
              </div>
            ))}
            {set2.map((item, id) => (
              <div
                key={id}
                onMouseEnter={() => setShowButton2(true)}
                onMouseLeave={() => setShowButton2(false)}
                className=" flex w-1/6  hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
                {showButton2 && <MediaButton />}
              </div>
            ))}
            {set3.map((item, id) => (
              <div
                key={id}
                className=" flex w-1/6  hover:-translate-x-24 hover:scale-150 ease-in duration-200 hover:shadow-xl"
              >
                <img src={item.cover} className="rounded-lg" />
              </div>
            ))}
          </div>
        </Carousel>
      </div> */}
      {/* <div className="">
        <h1 className="absolute text-white text-2xl ">Thrillers & Horror</h1>
      </div> */}
      {/* <div className="">
        <h1 className="absolute text-white text-2xl ">Comedies</h1>
      </div> */}
      {/* <div className="">
        <h1 className="absolute text-white text-2xl ">Cartoons</h1>
      </div> */}
    </>
  );
}

// import img1 from '../../assets/img1.png';
// import img2 from '../../assets/img2.png';
// import img3 from '../../assets/img3.png';
// import img4 from '../../assets/img4.png';
// import img5 from '../../assets/img5.png';
// import img6 from '../../assets/img6.png';
// const mockData = [
//   {
//     cover: img1,
//     age: '13+',
//     length: '2h 15m',
//     mood1: 'scarry',
//     mood2: 'funny',
//     mood3: 'sadly',
//   },
//   {
//     cover: img2,
//     age: '16+',
//     length: '2h 10m',
//     mood1: 'funny',
//     mood2: 'exited',
//     mood3: 'sadly',
//   },
//   {
//     cover: img3,
//     age: '18+',
//     length: '2h 05m',
//     mood1: 'exited',
//     mood2: 'exited',
//     mood3: 'sadly',
//   },
//   {
//     cover: img4,
//     age: '13+',
//     length: '2h 15m',
//     mood1: 'scarry',
//     mood2: 'funny',
//     mood3: 'sadly',
//   },
//   {
//     cover: img5,
//     age: '16+',
//     length: '2h 10m',
//     mood1: 'funny',
//     mood2: 'exited',
//     mood3: 'sadly',
//   },
//   {
//     cover: img6,
//     age: '18+',
//     length: '2h 05m',
//     mood1: 'exited',
//     mood2: 'exited',
//     mood3: 'sadly',
//   },
// ];
