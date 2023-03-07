import {
  AddButton,
  CheckButton,
  CloseButton,
  PlayButton,
  PlayIconButton,
} from '../../images';
import img2 from '../../assets/img2.png';
import logo from '../../assets/logo.png';

export function Modal({ closeModal, itemModal }) {
  // console.log(itemModal);
  // console.log(itemModal?.MovieCasts[0].Cast?.name);
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-30"
      onMouseDown={closeModal}
    >
      <div
        className="relative mt-10 w-[55%] h-full bg-zinc-900 rounded-lg shadow-lg overflow-auto  m-auto  pb-10 "
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button className="absolute mt-3 right-3 z-30" onClick={closeModal}>
          <CloseButton />
        </button>
        <div className="absolute top-40 ">
          <div className="flex flex-col ">
            {/* logoMovie */}
            <div className="w-[40%] h-full">
              <img src={logo} alt="" />
            </div>
            <div className="flex ">
              <div className="flex gap-2 absolute z-10 ml-12 top-72">
                <button
                  className="
                  px-3
                  py-0
                  bg-white
                  text-black
                  text-lg
                  leading-tight
                  uppercase
                  rounded
                  shadow-md
                  hover:bg-opacity-50 hover:shadow-lg
                   active:ring-2 ring-white
                  transition
                  duration-150
                  ease-in-out
                  flex
                  items-center
                  whitespace-nowrap
                "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <PlayIconButton />
                  play
                </button>
                <button className="stroke-white opacity-50 hover:opacity-100 active:opacity-50">
                  <AddButton />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[370px]  left-0 right-0 bg-gradient-to-t from-zinc-900 h-[130px] "></div>

        {/* video */}
        <div className="w-full h-[500px] overflow-hidden ">
          {/* <video className="w-full shadow-lg" autoPlay loop controls muted>
            <source src={movieLink} type="video/mp4" />
          </video> */}
          <img src={itemModal.cover} className="object-cover" />
        </div>
        {/* video */}

        {/* content */}
        <div className="flex gap-10  m-auto w-[90%]  mt-8">
          <div className="flex flex-col w-[60%]">
            <div className="flex gap-3">
              <button className=" border-2 border-gray-500 text-white text-lg px-2">
                {itemModal.Age.name}
              </button>
              <p className="text-yellow-50 text-lg">{itemModal.length}</p>
            </div>
            <div>
              <p className="break-words w-[500px] text-white text-lg pt-8 ">
                {itemModal.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="text-zinc-500">Cast: </p>
              <p className="break-words w-[200px] text-white ">
                {itemModal?.MovieCasts[0].Cast?.name}
              </p>
            </div>
            <div className="flex mt-5">
              <p className="text-zinc-500">Genres: </p>
              <p className="break-words w-[200px] text-white ">
                The Guardians leave us with lessons on love,
              </p>
            </div>
            <div className="flex mt-5">
              <p className="text-zinc-500">This movie is : </p>
              <p className="break-words w-[150px] text-white ">
                The Guardians leave
              </p>
            </div>
          </div>
        </div>
        {/* content */}

        <h1 className="text-white text-3xl ml-11 mt-10 ">More Like This</h1>

        {/* cardMovie */}
        <div className="flex flex-wrap justify-center gap-5 w-[900px] m-auto mt-4 mb-20">
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" w-[260px] h-[360px] rounded-lg  shadow-lg bg-neutral-800 hover:bg-opacity-60 ">
              <div className="w-full h-[140px] overflow-hidden">
                <img className="rounded-t-lg" src={img2} alt="" />
              </div>
              <div className="p-2">
                <div className="flex justify-between">
                  <div className="flex gap-2 mt-1 pr-2 py-3">
                    <button className=" border-2 border-gray-500 text-white text-lg px-2">
                      16+
                    </button>
                    <p className="text-yellow-50 text-lg pt-1">2h 1m</p>
                  </div>
                  <div>
                    <button className="opacity-70 hover:opacity-100 active:opacity-50 pt-2">
                      <PlayButton />
                    </button>
                    <button className="stroke-white opacity-70 hover:opacity-100 active:opacity-50">
                      <AddButton />
                    </button>
                  </div>
                </div>
                <p className="break-words w-[240px] text-white text-sm pt-3 m-auto ">
                  The Guardians leave us with lessons on love, laughter, fun,
                  family and friends as they fight against the forces of Ronan
                  and Thanos to protect the galaxy.
                </p>
              </div>
            </div>
          </div>
          {/* endCardMovie */}
        </div>
      </div>
    </div>
  );
}
