import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AddButton,
  Dot,
  MoreInfoButton,
  PlayButton,
  CheckButton,
} from '../../images';
import { addWatchlist, deleteWatchlist } from '../../redux/watchlistSlice';

export function MediaButton({
  changeCurrentMovie,
  item,
  setItemModal,
  showButton,
}) {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.mylist);
  const profile = useSelector((state) => state.user.currentProfile);

  const watchlistId = watchlist?.map((el) => el.movieId);
  const watchlistDel = watchlist?.filter((el) => el.movieId === item.id);

  const [inWatchwatch, setInWatchlist] = useState(false);

  useEffect(() => {
    const res = watchlistId?.some((el) => el === item.id);
    setInWatchlist(res);
  }, [watchlist]);

  const handleClickAddWatchlist = () => {
    dispatch(addWatchlist({ movieId: item.id, profileId: profile.id }));
  };

  const handleClickDelWatchlist = () => {
    dispatch(deleteWatchlist(watchlistDel[0].id, profile.id));
  };

  return (
    <div
      className={`absolute  bg-gradient-to-t from-zinc-600 w-full bottom-0 rounded-b-md px-3 pb-1 flex flex-col justify-center ${
        !showButton ? ' hidden' : ''
      }`}
    >
      <div className="flex justify-end pt-1">
        <button className="opacity-70 hover:opacity-100 active:opacity-50">
          <PlayButton />
        </button>
        {inWatchwatch ? (
          <button
            className="stroke-white opacity-70 hover:opacity-100 active:opacity-50"
            onClick={handleClickDelWatchlist}
          >
            <CheckButton />
          </button>
        ) : (
          <button
            className="stroke-white opacity-70 hover:opacity-100 active:opacity-50"
            onClick={handleClickAddWatchlist}
          >
            <AddButton />
          </button>
        )}
        <button
          className="stroke-white opacity-70 hover:opacity-100 active:opacity-50"
          onClick={() => {
            changeCurrentMovie();
            setItemModal(item);
          }}
        >
          <MoreInfoButton />
        </button>
      </div>
      <div className="flex justify-end gap-2 mt-1 pr-2">
        <button className=" border-2 border-gray-100 text-white text-xs px-2">
          {item.Age.name}
        </button>
        <p className="text-yellow-50 text-xs">{item.length}</p>
      </div>
      <div className="flex justify-end w-full text-white text-[8px]">
        {item.MovieMoods.map((item, id) => (
          <div key={id}>
            <p className="flex items-center">
              <Dot />
            </p>
            <button>{item.Mood.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}
