import Styles from "../CSS/Search.module.css";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function Search() {
    const [searchText, setsearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/?search=" + searchText);
    }

    return (
        <form className={Styles.searchContainer} onSubmit={handleSubmit}>
            <div className={Styles.searchBox}>
                <input 
                    className={Styles.searchInput} 
                    type="text" value={searchText} 
                    onChange={(e) => setsearchText(e.target.value)}
                    />
                <button className={Styles.searchButton} type="submit">
                     <ImSearch/>
                </button>
            </div>
        </form>
    )
}