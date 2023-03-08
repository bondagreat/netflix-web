import { getVideo, getAllMovie } from '../apis/movie-api';
import { useDispatch, useSelector } from 'react-redux';

export default async function useFetchVideo(movieId, id) {
  try {
    const allMovie = useSelector((state) => state.movie?.movie);
    const movie = allMovie?.find((el) => el.id === movieId);

    if (movie) {
      const res = await getVideo(movie?.movie);
      const video = document.getElementById(id);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      video.src = url;
      return url;
    }
  } catch (error) {
    console.log('Request failed', error.message);
  }
}
