// import movies from "./movies.json"
import { MovieCard } from "./MovieCard"
import styles from "./MoviesGrid.module.css"
import { useEffect, useState } from "react";
import get from "../utils/httpClient";

export function MoviesGrid() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    get("/discover/movie")
    .then((responseData) => {
      setMovies(responseData.results);
    });
  }, [])
    // console.log("movies después del fetch", movies);
  return (
    <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
           <MovieCard   key={movie.id} movie={movie} />
         ))}
    </ul>
  );
}
