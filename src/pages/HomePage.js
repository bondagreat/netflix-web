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
import { fetchWatchlist } from '../redux/watchlistSlice';

export default function HomePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.currentProfile);

  const [currentMovie, setCurrentMovie] = useState(false);
  const allMovies = useSelector((state) => state.movie.movie);
  const [genreList1, setGenreList1] = useState([]);
  const [genreList2, setGenreList2] = useState([]);
  const [genreList3, setGenreList3] = useState([]);
  const [genreList4, setGenreList4] = useState([]);
  const [genreList5, setGenreList5] = useState([]);
  const [itemModal, setItemModal] = useState({});

  const changeCurrentMovie = () => {
    setCurrentMovie(true);
  };
  const closeModal = () => {
    setCurrentMovie(false);
  };

  useEffect(() => {
    console.log(profile);
    dispatch(fetchAllMovie());
    dispatch(fetchWatchlist(profile?.id));
  }, [profile]);

  useEffect(() => {
    if (allMovies) {
      const genreListMovie = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 1
      );
      setGenreList1(genreListMovie);

      const genreListMovie2 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 2
      );
      setGenreList2(genreListMovie2);

      const genreListMovie3 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 3
      );
      setGenreList3(genreListMovie3);

      const genreListMovie4 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 4
      );
      setGenreList4(genreListMovie4);

      const genreListMovie5 = allMovies.filter(
        (el) => el.MovieGenres[0]?.Genre?.id === 5
      );
      setGenreList5(genreListMovie5);
    }
  }, [allMovies]);

  return (
    <>
      {currentMovie && (
        <Modal
          closeModal={closeModal}
          setCurrentMovie={setCurrentMovie}
          itemModal={itemModal}
        />
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
            title={'My List'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList1}
            dispatch={dispatch}
            setItemModal={setItemModal}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'New Release'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList2}
            dispatch={dispatch}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Thrillers & Horror'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList3}
            dispatch={dispatch}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Comedies'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList4}
            dispatch={dispatch}
          />
        </div>
        <div className="relative bottom-[110px] z-10  ml-10 w-[1650px]">
          <MovieList
            title={'Family Comedies'}
            changeCurrentMovie={changeCurrentMovie}
            movieSet={genreList5}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
}
