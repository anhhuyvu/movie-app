import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from 'react-icons/fa';
import { fetchAsyncMoviesDetails, getSelectedMovies, removeSelectedMovie } from '../../features/movies/movieSlice';

import './MovieDetails.scss';
const MovieCard = (): JSX.Element => {
  const { imdbID } = useParams();
  const dispatch = useDispatch<any>();
  const data = useSelector(getSelectedMovies);
  console.log(data);

  useEffect(() => {
    dispatch(fetchAsyncMoviesDetails(imdbID || ''));
    return () => {
      dispatch(removeSelectedMovie());
    };
  }, [dispatch, imdbID]);
  return (
    <div className="movie-details-container">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <FaStar /> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <FaThumbsUp /> : {data.imdbVotes}
          </span>
          <span>
            IMDB Runtime <FaFilm /> : {data.Runtime}
          </span>
          <span>
            IMDB Year <FaCalendar /> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <div>
            <span>Director: </span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars: </span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Genres: </span>
            <span>{data.Genre}</span>
          </div>
          <div>
            <span>Languages: </span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards: </span>
            <span>{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieCard;
