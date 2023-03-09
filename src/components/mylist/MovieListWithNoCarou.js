import { useEffect, useState } from 'react';
import MovieCardMyList from './MovieCardMylist.js';

export function MovieListWithNoCarou({
  changeCurrentMovie,
  movieSet,
  // title,
  setItemModal,
}) {
  const [isAllMovie, setIsAllMovie] = useState([]);
  useEffect(() => {
    if (movieSet) {
      // const page = Math.floor(movieSet.length / 6);
      const page = 5;
      let newArrPage = [];
      let i = 0;
      while (i < page) {
        const sliceMovie = movieSet.slice(i * 6, (i + 1) * 6);
        newArrPage.push(sliceMovie);
        i++;
      }
      setIsAllMovie(newArrPage);
    }
    console.dir(isAllMovie);
  }, [movieSet]);

  return (
    <>
      <div>
        {isAllMovie?.map((item, idx) => {
          return (
            <div
              key={idx}
              className="w-full h-[150px] flex mx-auto gap-2 items-center mt-10"
            >
              {item?.map((el, index) => {
                return (
                  <MovieCardMyList
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
      </div>
    </>
  );
}
