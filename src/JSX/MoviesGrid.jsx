import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import styles from "../CSS/MoviesGrid.module.css";
import { get } from "../Api.js";
import { Spinner } from "./Spinner.jsx";
import { useQuery } from "./Hooks/useQuery";


export function MoviesGrid() {
  const [Movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search"); 
  
  useEffect(() => {  
    setisLoading(true);
    const searchUrl = search 
    ? "/search/movie?query=" + search 
    : "/discover/movie"; 
    get(searchUrl).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

  if(isLoading) {
    return <Spinner/>;
  }

    return( 
      <li className={styles.MoviesGrid}>
        {Movies.map((Movies) => (
            <MovieCard key = {Movies.id } Movies = {Movies}></MovieCard>
        ))}
      </li>
    );
}