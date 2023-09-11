import styles from './LandingPage.module.css';
import imgBackground from '../../img/imgBackgroundIni.jpg'
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navegate = useNavigate();
    const handleGoHome = () => {
        navegate('/home');

    }

    return (
        <div className={styles.container}>
            <div className={styles.containerInfo}>
                <div className={styles.info}>
                    <span className={styles.letra_p}>P</span>
                    <span className={styles.letra_i}>I </span>
                    <span className={styles.letra_d}>D</span>
                    <span className={styles.letra_o}>o</span>
                    <span className={styles.letra_g}>g</span>
                    <span className={styles.letra_s}>s</span>
                     <span className={styles.nombre}> | Rafael Prieto</span>
                </div>
                <button className={styles.btn} onClick={handleGoHome}>Entrar</button>
            </div>
            <div className={styles.containerImg}>
                <img className={styles.img} src={imgBackground} alt="fondoInicial" />
            </div>
        </div>
    )
}


export default LandingPage;