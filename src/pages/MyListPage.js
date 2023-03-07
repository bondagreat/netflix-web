import { MovieList } from '../components/homepages/MovieList';

export default function MyListPage() {
  return (
    <>
      <div className="h-[50vh] bg-black">
        <p className="text-white text-3xl mx-10 pt-20 ">My List</p>
        <div className="">
          <MovieList />
        </div>
      </div>
    </>
  );
}
