import { AddButton, Dot, MoreInfoButton, PlayButton } from '../../images';

export function MediaButton({ changeCurrentMovie, item, setItemModal }) {
  console.log(item);
  return (
    <>
      <div className="absolute  bg-gradient-to-t from-zinc-600 w-full bottom-0 rounded-b-md px-3 pb-1 flex flex-col justify-center ">
        <div className="flex justify-end pt-1">
          <button className="opacity-70 hover:opacity-100 active:opacity-50">
            <PlayButton />
          </button>
          <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
            <AddButton />
          </button>
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
        <div className="flex justify-end w-full text-white text-xs">
          {item.MovieMoods.map((item, id) => (
            <>
              <p className="flex items-center">
                <Dot />
              </p>
              <button key={id}>{item.Mood.name}</button>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
