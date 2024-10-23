import React, { useEffect, useState } from "react";
import { fetchMovies } from "../services/movies";
import styles from "./Movies.module.css";
import Card from "../components/Card";
import { IMovieDetails } from "../services/movies";

function getDate(unixTimestamp: number) {
  const date = new Date(unixTimestamp * 1000);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

const Movies: React.FC = () => {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    fetchMovies().then((value) => {
      setMovieList(value);
    });
  }, []);

  return (
    <>
      <div className={styles.cardContainer}>
        {moviesList?.map((item: IMovieDetails, index: number) => (
          <Card
            key={index}
            title={item?.items[0].title}
            upVote={item.upVoted}
            downVote={item.downVoted}
            rank={index + 1}
            poster={item?.items[0].poster}
            genre={item?.items[0].genre}
            language={item?.items[0].language}
            releaseDate={getDate(item?.items[0].releasedDate)}
            director={item?.items[0].director[0]}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;
