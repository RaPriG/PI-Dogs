import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import imgHuella from '../../img/huella2.png'
const NavBar = (fnFilterDogs) => {

    return (
        <div className={styles.container}>
            <div>
                <Link to={'/home'}>
                    <img className={styles.img} src={imgHuella} alt="huella" />
                </Link>
            </div>
            <div>
                <ul className={styles.menu}>
                    <Link to={'/home'} className={styles.item}>
                        <i className={`fas fa-home ${styles.iconHome}`} ></i>
                    </Link>
                    <Link to={'/newdog'} className={styles.item}>
                        <i className={`fas fa-plus-square ${styles.iconNew}`}></i>
                    </Link>
                    <Link to={'/'} className={styles.item}>
                        <i className={`fas fa-sign-out-alt ${styles.iconLogout}`}></i>
                    </Link>
                </ul>
            </div>
        </div >
    );
}


export default NavBar;