// import logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
// import { ButtonHomepage } from '../components/homepages/ButtonHomepage';
import { DropdownGenres } from '../components/homepages/DropdownGenres';
import { Modal } from '../components/homepages/Modal';
import { MovieList } from '../components/homepages/MovieList';
import { NetflixTitleLogo } from '../images';
import MovieShowcase from '../components/homepages/MovieShowcase';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllMovie } from '../redux/movieSlice';

export default function HomePage() {
  const [currentMovie, setCurrentMovie] = useState(false);
  const allMovies = useSelector((state) => state.movie.movie);
  // console.log(allMovies);

  const dispatch = useDispatch();

  const changeCurrentMovie = () => {
    setCurrentMovie(true);
  };

  const closeModal = () => {
    setCurrentMovie(false);
  };

  useEffect(() => {
    dispatch(fetchAllMovie());
  }, []);

  // console.log(allMovies);

  return (
    <>
      {currentMovie && (
        <Modal closeModal={closeModal} setCurrentMovie={setCurrentMovie} />
      )}
      <div className="absolute top-[770px]  left-0 right-0 bg-gradient-to-t from-black h-[130px] "></div>
      <div className="bg-black ">
        <MovieShowcase />

        {/* rate */}
        <div className="absolute top-[600px] right-0 bg-gray-500 bg-opacity-50 py-1 w-24 border-l-4">
          <p className="text-lg text-white ml-4">16+</p>
        </div>

        <div className="fixed inline-block top-24 left-9 z-20">
          <p className="sticky text-white text-4xl top-0">Movies</p>
        </div>
        <DropdownGenres />

        {/* MovieList */}
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            changeCurrentMovie={changeCurrentMovie}
            allMovies={allMovies}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
}
