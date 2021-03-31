import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import get from "../utils/httpClient";
// import movie from "./movie.json"
import styles from "./MovieDetails.module.css"
 


const MoviesDetails = () => {
    const { movieId } = useParams()
    // console.log("movieId: ", movieId)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        get("/movie/" + movieId).then((responseData) => {
          setMovie(responseData);
        });
      }, [movieId])

    if (!movie) {
        return null;
    }

      const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title}></img>
            {/* <img className={styles.col + " " + styles.movieImage} */}
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title: {movie.title}</strong></p>
                <p>
                    <strong>Genre: </strong>{movie.genres.map((genre) => genre.name).join(', ')}
                </p>
                <p><strong>Description: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MoviesDetails;