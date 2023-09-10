import styles from './Card.module.css';

export default function Card({ image, name, temperament, weight_min, weight_max }) {

    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt={name} className={styles.img} />
            </div>
            <div className={styles.containerInfo}>
                <h2 className={styles.name}>{name}</h2>
                <h5 className={styles.temp}>{temperament}</h5>
                <h5 className={styles.weight}>Weight: {weight_min}kg - {weight_max}kg</h5>
            </div>
        </div >
    )
}