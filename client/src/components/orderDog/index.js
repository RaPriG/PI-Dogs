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
                        value='descending' />
                    Descending
                </label>
                <br />
                <label>
                    <input
                        type='radio'
                        name='groupAscDesc'
                        value='ascending' />
                    Ascending
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
                        value='weight' />
                    By Weight
                </label>
            </div>

        </div>
    )
}

export default OrderDog;