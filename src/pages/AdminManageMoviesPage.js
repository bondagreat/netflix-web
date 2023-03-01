import Brand from '../layouts/Brand';
import MenuItemRight from '../layouts/MenuItemRight';
import {
  HomeLogo,
  SearchIcon,
  ArrowLeft,
  ArrowRight,
  BinIcon,
  WriteEditIcon,
  MovieIcon,
  FilmIcon,
} from '../images';
import MovieImage from '../assets/wall.jpg';

export default function AdminManageMoviesPage() {
  return (
    <>
      <div>
        <div className=" top-0 left-0 right-0 bg-black h-[100px] ">
          <div className="flex justify-center">
            <div className=" h-[70px] w-full flex">
              <Brand />
            </div>
            <div className=" h-[100px]  w-full ">
              <div className="flex items-center justify-end gap-3 mr-10 mt-8">
                <MenuItemRight>
                  <SearchIcon />
                </MenuItemRight>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row  w-screen h-screen">
          <div className="pt-10 w-[230px] pl-5 bg-zinc-800">
            <div>
              <div className="flex flex-row gap-3">
                <div className="fill-white ">
                  <HomeLogo />
                </div>
                <p className="text-white mt-2">Home</p>
              </div>
              <div className="pl-11">
                <p className="text-white mt-2">Users</p>
                <p className="text-white mt-2">Movies</p>
              </div>
            </div>
            <div className="text-white mt-4">
              <p>Log out</p>
            </div>
          </div>
          <div className="bg-neutral-500 flex flex-grow flex-col">
            <div className="flex flex-row justify-between">
              <p className="text-white mt-2 ml-2">Movies</p>
              <button className="text-white border-1 mt-2 mr-2  bg-green-500 px-3 py-1 rounded-lg ml-5">
                Add movies
              </button>
            </div>
            <div className="flex flex-col mt-10">
              <div>
                <div className="inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className=" bg-neutral-500 font-medium ">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Id
                          </th>
                          <th scope="col" className="px-6 py-4"></th>
                          <th scope="col" className="px-6 py-4">
                            Movie name
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Length
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Genres
                          </th>
                          <th scope="col" className="px-6 py-4"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className=" bg-neutral-400 ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                            1
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-40 h-22 text-white ">
                            <img src={MovieImage} alt="movie" />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Movie1
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            1h 55m
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Active
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white flex flex-row justify-between mt-4 ">
                            <BinIcon />
                            <WriteEditIcon />
                            <MovieIcon />
                            <FilmIcon />
                          </td>
                        </tr>
                        <tr className=" bg-neutral-500  ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                            2
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-40 h-22 text-white ">
                            <img src={MovieImage} alt="movie" />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Movie2
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            1h 55m
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Active
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white flex flex-row justify-between mt-4 ">
                            <BinIcon />
                            <WriteEditIcon />
                            <MovieIcon />
                            <FilmIcon />
                          </td>
                        </tr>
                        <tr className=" bg-neutral-400 ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                            3
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-40 h-22 text-white ">
                            <img src={MovieImage} alt="movie" />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Movie3
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            1h 55m
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Active
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white flex flex-row justify-between mt-4 ">
                            <BinIcon />
                            <WriteEditIcon />
                            <MovieIcon />
                            <FilmIcon />
                          </td>
                        </tr>
                        <tr className=" bg-neutral-500  ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                            4
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-40 h-22 text-white ">
                            <img src={MovieImage} alt="movie" />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Movie4
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            1h 55m
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Active
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white flex flex-row justify-between mt-4 ">
                            <BinIcon />
                            <WriteEditIcon />
                            <MovieIcon />
                            <FilmIcon />
                          </td>
                        </tr>
                        <tr className=" bg-neutral-400 ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium text-white">
                            5
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 w-40 h-22 text-white ">
                            <img src={MovieImage} alt="movie" />
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Movie5
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            1h 55m
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white ">
                            Active
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-white flex flex-row justify-between mt-4 ">
                            <BinIcon />
                            <WriteEditIcon />
                            <MovieIcon />
                            <FilmIcon />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-14">
                <div className="fill-white">
                  <ArrowLeft />
                </div>
                <div className="flex flex-row gap-4 mt-1">
                  <p className="text-white ">1</p>
                  <p className="text-white ">2</p>
                  <p className="text-white ">3...</p>
                </div>
                <div className="fill-white">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
