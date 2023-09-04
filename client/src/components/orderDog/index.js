import styles from './OrderDog.module.css'

const OrderDog = () => {

    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Order</h5>
            <div className={styles.containerInput}>
                <label>
                    <input
                        type='radio'
                        name='groupAscDesc'
                        value='descendente' />
                    Descendente
                </label>
                <br />
                <label>
                    <input
                        type='radio'
                        name='groupAscDesc'
                        value='ascendente' />
                    Ascendente
                </label>
                <br />
                <div className={styles.lineDivide} />
                <label>
                    <input
                        type='radio'
                        name='orderByTempWei'
                        value='temperament' />
                    By Temperaments
                </label>
                <br />
                <label>
                    <input
                        type='radio'
                        name='orderByTempWei'
                        value='ascendente' />
                    By Weight
                </label>
            </div>

        </div>
    )
}

export default OrderDog;