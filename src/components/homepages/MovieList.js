import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export function MovieList({
  changeCurrentMovie,
  movieSet,
  title,
  setItemModal,
}) {
  const [showButton, setShowButton] = useState(false);
  const [isAllMovie, setIsAllMovie] = useState([]);
  useEffect(() => {
    if (movieSet) {
      // const page = Math.floor(movieSet.length / 6);
      const page = 3;
      let newArrPage = [];
      let i = 0;
      while (i < page) {
        const sliceMovie = movieSet.slice(i * 6, (i + 1) * 6);
        newArrPage.push(sliceMovie);
        i++;
      }
      setIsAllMovie(newArrPage);
    }
  }, [movieSet]);
  return (
    <>
      <div className="">
        <h1 className="absolute text-white text-2xl ">{title}</h1>
        <Carousel
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
        >
          {isAllMovie?.map((item, idx) => {
            return (
              <div
                key={idx}
                className=" w-full h-[250px]   flex gap-2 items-center"
              >
                {item?.map((el, index) => {
                  return (
                    <MovieCard
                      key={el.id}
                      item={el}
                      idx={index}
                      changeCurrentMovie={changeCurrentMovie}
                      setItemModal={setItemModal}
                    />
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
