import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';

const Home = (): JSX.Element => {
  const dispatch = useDispatch<any>();
  const movieText = 'Harry';
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
  }, [dispatch]);

  return (
    <>
      <div className="banner-img"></div>
      <MovieListing />
    </>
  );
};

export default Home;
