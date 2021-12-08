import styles from "../CSS/App.module.css";
import {BrowserRouter as Router, Routes, Route, Link}   from "react-router-dom";
import { MovieDetails } from "./MovieDetails.jsx";
import { Home } from "./Home";


export function App() {
    return (
        <Router>
            <header>
                <Link to="/"> 
                    <h1 className={styles.title}>Peliculas</h1>
                    <h4 className={styles.subtitle}>by Sander</h4>
                </Link>
            </header><main>
                <Routes>
                    <Route extact path="/movies/:movieId" element={<MovieDetails />}> </Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </main>
       </Router>
    );
}