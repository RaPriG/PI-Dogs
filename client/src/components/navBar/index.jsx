import styles from './NavBar.module.css';
import imgHuella from '../../img/huella.png'
const NavBar = (fnFilterDogs) => {

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.img} src={imgHuella} alt="huella" />
            </div>
            <div>
                <ul className={styles.item}>
                    <li>Home</li>
                    <li>New Dog</li>
                    <li>Logout</li>
                </ul>
            </div>
        </div>
    );
}


export default NavBar;