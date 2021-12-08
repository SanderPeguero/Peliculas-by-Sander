import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search.jsx";

export function Home() {
    return (
        <div>
            <Search/>
            <MoviesGrid/>
        </div>
    );  
}