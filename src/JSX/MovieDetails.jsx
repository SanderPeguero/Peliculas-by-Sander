import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { get } from "../Api.js";
import styles from "../CSS/MovieDetails.module.css";
import { Spinner } from "./Spinner.jsx";

export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [Movies, setMovie] = useState(null);

    useEffect(() => {  
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false);
        });
      }, [movieId]);

    if (isLoading) {
        return <Spinner/>;
    }
    if (!Movies) {
        return null;
    }

    const imageUrl = "https://image.tmdb.org/t/p/w500" + Movies.poster_path;

    return ( 
        <div className={styles.detailsContainer}>
            <img 
                className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl} 
                alt={Movies.title} 
            />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}><strong>Title:</strong> {Movies.title}</p>
                <p><strong>Genres:</strong>{Movies.genres.map(genre => genre.name).join(", ")}</p>
                <p><strong>Description:</strong> {Movies.overview}</p>
            </div>
        </div>
    );
}