import { useQuery } from "./Hooks/useQuery";
import { MoviesGrid } from "./MoviesGrid";
import { Search } from "./Search.jsx";

export function Home() {
    const query = useQuery();
    const search = query.get("search"); 

    return (
        <div>
            <Search/>
            <MoviesGrid key={search} search={search}/>
        </div>
    );  
}