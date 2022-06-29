import React from 'react';
import { Link } from 'react-router-dom';
import { MovieType } from '../../constant/interfaces';
import './MovieCard.scss';

interface IMovieCard {
  data: MovieType;
}

const MovieCard: React.FC<IMovieCard> = (props) => {
  const { Title, Poster, Year, imdbID } = props.data;
  return (
    <div className="card-item">
      <Link to={`/movie/${imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={Poster} alt={Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{Title}</h4>
              <p>{Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
