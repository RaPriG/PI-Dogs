import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import imgHuella from '../../img/huella.png'
import { FaHome, FaFileExport, FaPlusSquare } from "react-icons/fa";
const NavBar = (fnFilterDogs) => {

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.img} src={imgHuella} alt="huella" />
            </div>
            <div>
                <ul className={styles.menu}>
                    <Link to={'/home'} className={styles.item}>
                        <li ><FaHome /> Home</li>
                    </Link>
                    <Link to={'/newdog'} className={styles.item}>
                        <li><FaPlusSquare /> New Dog</li>
                    </Link>
                    <Link to={'/'} className={styles.item}>
                        <li><FaFileExport /> Logout</li>
                    </Link>
                </ul>
            </div>
        </div >
    );
}


export default NavBar;