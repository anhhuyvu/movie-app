export interface MovieType {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieDetails extends MovieType {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Rating: [
    {
      Source: string;
      Value: string;
    },
  ];
  imdbRating: string;
  imdbVotes: string;
}

export interface MovieResponse {
  Response: string;
  Search: MovieType[];
  totalResults: string;
}
