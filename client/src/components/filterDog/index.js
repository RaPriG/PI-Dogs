import styles from './filterDog.module.css';
const FilterAndOrder = () => {
    return (
        <div>
            <h5 className={styles.titulo}>Filter</h5>
            <label>
                <input type='checkbox' />Temperaments
            </label>
            <br />
            <label>
                <input type='checkbox' />From Api
            </label>
            <br />
            <label>
                <input type='checkbox' />From DB
            </label>

        </div>
    )
}

export default FilterAndOrder;
