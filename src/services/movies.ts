import axios from "axios";

export interface IMovieDetails {
  _id: string;
  canAnonymousVote: boolean;
  items: Array<IMovie>;
  upVoted: number;
  downVoted: number;
  voting: number;
  totalVotes: number;
}

export interface IMovie {
  _id: string;
  director: Array<string>;
  stars: Array<string>;
  releasedDate: number;
  title: string;
  language: string;
  poster: string;
  genre: string;
  pageViews: number;
  description: string;
  voting: number;
  totalVotes: number;
  upVoted: number;
  downVoted: number;
}

export const fetchMovies = async () => {
  const res = await axios.post(import.meta.env.VITE_MOVIE_URL, {
    category: "movies",
    page: 0,
    searchableTitle: "salman-khan-movies-list-all",
    sort: "byRank",
    userTag: "sachinanchan7",
  });

  return res.data.data.favouriteResult2Votes;
};
