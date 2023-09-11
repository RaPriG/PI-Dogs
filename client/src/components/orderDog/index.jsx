import styles from './OrderDog.module.css'

const OrderDog = ({ handlerOnChange, dataOrder }) => {

    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Order</h5>
            <div className={styles.containerInput}>

                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='radio'
                        name='ascDesc'
                        value='ascending'
                        checked={dataOrder.ascDesc === 'ascending'}
                        onChange={handlerOnChange} 
                        id='des'/>
                    Ascending
                </label>
                <br />

                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='radio'
                        name='ascDesc'
                        value='descending'
                        checked={dataOrder.ascDesc === 'descending'}
                        onChange={handlerOnChange} />
                    Descending
                </label>

                <br />
                <div className={styles.lineDivide} />

                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='radio'
                        name='by'
                        value='breed'
                        checked={dataOrder.by === 'breed'}
                        onChange={handlerOnChange} />
                    By Breed
                </label>
                <br />

                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='radio'
                        name='by'
                        value='weight'
                        checked={dataOrder.by === 'weight'}
                        onChange={handlerOnChange} />
                    By Max Weight
                </label>
            </div>
        </div>
    )
}

export default OrderDog;