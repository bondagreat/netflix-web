import axios from '../config/axios';

export const getAllMovie = () => axios.get('/movie/getAllMovie');
// export const getVideo = (name) => `http://localhost:8888/movie/stream/${name}`;

export const getVideo = (name) => {
  const source = axios.CancelToken.source();
  return axios.get(`http://localhost:8888/movie/stream/${name}`, {
    responseType: 'blob',
    cancelToken: source.token,
  });
};
