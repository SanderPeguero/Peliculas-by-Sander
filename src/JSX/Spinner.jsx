import { FaRegGrinSquint } from "react-icons/fa";
import styles from "../CSS/Spinner.module.css";

export function Spinner() {
    return (
        <div className={styles.spinner}>
            <FaRegGrinSquint className={styles.spinning} size={60}/>
        </div>
    )
}
