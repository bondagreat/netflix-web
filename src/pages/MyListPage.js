import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '../components/homepages/Modal';
import { MovieListWithNoCarou } from '../components/mylist/MovieListWithNoCarou';
import { useState } from 'react';

export default function MyListPage() {
  // const dispatch = useDispatch();
  const watchlistMovie = useSelector((state) => state.watchlist.mylist);
  console.log(watchlistMovie);
  const [itemModal, setItemModal] = useState({});
  const [currentMovie, setCurrentMovie] = useState(false);

  const changeCurrentMovie = () => {
    setCurrentMovie(true);
  };
  const closeModal = () => {
    setCurrentMovie(false);
  };

  console.log(itemModal);
  return (
    <>
      {currentMovie && (
        <Modal
          closeModal={closeModal}
          setCurrentMovie={setCurrentMovie}
          itemModal={itemModal}
        />
      )}
      <div className=" bg-black">
        <p className="text-white text-3xl mx-10 pt-20 ">My List</p>
        <div className="">
          <MovieListWithNoCarou
            movieSet={watchlistMovie}
            changeCurrentMovie={changeCurrentMovie}
            setItemModal={setItemModal}
          />
        </div>
      </div>
    </>
  );
}
