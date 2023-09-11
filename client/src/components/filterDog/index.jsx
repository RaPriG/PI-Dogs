import { useState } from 'react';
import styles from './filterDog.module.css';
import SelectorMultiple from '../controlSelecMulti';

const FilterAndOrder = ({ temperaments, handlerOnChange }) => {

    const [filter, setFilter] = useState({
        temperaments: [],
        fromApi: false,
        fromDB: false
    });

    const handlerSelectTemperaments = (selected) => {
        const newFilter = {
            ...filter,
            temperaments: selected
        }

        setFilter(newFilter);
        handlerOnChange(newFilter);
    }

    const handlerChangeFilterFrom = (e) => {
        const { name, checked } = e.target;
        const newFilter = {
            ...filter,
            [name]: checked,
        }

        setFilter(newFilter);
        handlerOnChange(newFilter);
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Filter</h5>
            <div className={styles.containerInput}>

                <SelectorMultiple
                    temperaments={temperaments}
                    handlerChange={handlerSelectTemperaments} />

                <br />
                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='checkbox'
                        name='fromApi'
                        value={filter.fromApi}
                        onChange={handlerChangeFilterFrom} />From Api
                </label>
                <br />
                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='checkbox'
                        name='fromDB'
                        value={filter.fromDB}
                        onChange={handlerChangeFilterFrom} />From DB
                </label>
            </div>
        </div>
    )
}

export default FilterAndOrder;
