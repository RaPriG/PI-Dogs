import styles from './Card.module.css';

export default function Card({ image, name }) {

    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt={name} className={styles.img} />
            </div>
            <div className={styles.name}>
                <h2>{name}</h2>
            </div>
        </div>
    )
}