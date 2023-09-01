import styles from './NavBar.module.css';
const NavBar = (fnFilterDogs) => {

    return (
        <div className={styles.container}>
            <div>
                <img src="" alt="" />
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