import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import movieApi from '../../apis/movieApi';
import { API_KEY } from '../../apis/movieApiKeys';
import { MovieResponse, MovieType, MovieDetails } from '../../constant/interfaces';

interface Movie {
  movies: MovieType[];
  selectedMovie: MovieDetails;
}

export const fetchAsyncMovies = createAsyncThunk('movie/fetchAsyncMovie', async (term: string) => {
  const response = await movieApi.get<MovieResponse>(`?apiKey=${API_KEY}&s=${term}&type=movie`);
  return response.data;
});

export const fetchAsyncMoviesDetails = createAsyncThunk('movie/fetchAsyncMovieDetails', async (id: string) => {
  const response = await movieApi.get<MovieDetails>(`?apiKey=${API_KEY}&i=${id}&Plot=full`);
  return response.data;
});

const initialState: Movie = {
  movies: [
    {
      Poster: '',
      Title: '',
      Type: '',
      Year: '',
      imdbID: '',
    },
  ],
  selectedMovie: {
    Poster: '',
    Title: '',
    Type: '',
    Year: '',
    imdbID: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Rating: [
      {
        Source: '',
        Value: '',
      },
    ],
    imdbRating: '',
    imdbVotes: '',
  },
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovie: (state) => {
       state.selectedMovie = initialState.selectedMovie;
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending.toString()]: () => {
      console.log('Pending');
    },
    [fetchAsyncMovies.fulfilled.toString()]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected.toString()]: (state, { payload }) => {
      console.log('Rejected');
      return { ...state, movies: {} };
    },
    [fetchAsyncMoviesDetails.fulfilled.toString()]: (state, { payload }) => {
      return { ...state, selectedMovie: payload };
    },
  },
});

export const { addMovies, removeSelectedMovie } = movieSlice.actions;
export const getAllMovies = (state: any) => state.movies.movies;
export const getSelectedMovies = (state: any) => state.movies.selectedMovie;
export default movieSlice.reducer;
