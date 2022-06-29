import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
import { MovieType } from '../../constant/interfaces';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/MovieCard';

import './MovieListing.scss';

const MovieListing = (): JSX.Element => {
  const movies = useSelector(getAllMovies);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const renderMovie =
    movies.Response === 'True' &&
    movies.Search.map((movie: MovieType) => {
      return <MovieCard key={movie.imdbID} data={movie} />;
    });
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...settings}>{renderMovie}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
