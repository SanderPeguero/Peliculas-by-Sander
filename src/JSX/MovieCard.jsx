import { Link } from "react-router-dom";
import styles from "../CSS/MovieCard.module.css";

export function MovieCard ({ Movies }) {
    const imageUrl = "https://image.tmdb.org/t/p/w300" + Movies.poster_path;
    return (
        <li className={styles.MovieCard}>
            <Link to={"/movies/" + Movies.id}> 
                <img 
                width={230}
                height={345}
                className={styles.MovieImage} 
                src={imageUrl} 
                alt={Movies.title}
                />
                
                <div>{Movies.title}</div>
            </Link>    
        </li>
    );
}