import styles from "./Card.module.css";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

interface CardProps {
  title: string;
  rank: number;
  poster: string;
  genre: string;
  language: string;
  releaseDate: string;
  upVote: number;
  downVote: number;
  director: string;
}

const Card = ({
  title,
  rank,
  poster,
  genre,
  language,
  releaseDate,
  upVote,
  downVote,
  director,
}: CardProps) => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.rank}>{rank}</h1>
      <div className={styles.start}>
        <img className={styles.start} src={poster} alt={title} />
      </div>
      <div className={styles.start}>
        <h3>{title}</h3>
        <p className={styles.info}>Genre: {genre}</p>
        <p className={styles.info}>Language: {language}</p>
        <p className={styles.info}>ReleaseDate: {releaseDate}</p>
        <p className={styles.info}>Director: {director}</p>
      </div>
      <div className={styles.voteContainer}>
        <div>
          <p>{upVote}</p>
          <FaThumbsUp size={24} />
        </div>
        <div>
          <p>{downVote}</p>
          <FaThumbsDown size={24} />
        </div>
      </div>
    </div>
  );
};

export default Card;
