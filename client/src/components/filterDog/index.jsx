import styles from './filterDog.module.css';
import SelectorMultiple from '../controlSelecMulti';
import { useSelector } from 'react-redux';

const FilterAndOrder = ({ temperaments, handlerOnChange }) => {

    const filter = useSelector(state => state.dataFilter.filter);

    const handlerSelectTemperaments = (selected) => {
        const tempSelec = selected.map(temp => temp.name);
        const newFilter = {
            ...filter,
            temperaments: tempSelec
        }

        handlerOnChange(newFilter);
    }

    const handlerChangeFilterFrom = (e) => {
        const { name, checked } = e.target;
        const newFilter = {
            ...filter,
            [name]: checked,
        }

        handlerOnChange(newFilter);
    }

    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Filter</h5>
            <div className={styles.containerInput}>

                <SelectorMultiple
                    temperaments={temperaments}
                    desdeFilter={true}
                    handlerChange={handlerSelectTemperaments} />

                <br />
                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='checkbox'
                        name='fromApi'
                        checked={filter.fromApi}
                        onChange={handlerChangeFilterFrom} />From Api
                </label>
                <br />
                <label className={styles.pointer}>
                    <input className={styles.input}
                        type='checkbox'
                        name='fromDB'
                        checked={filter.fromDB}
                        onChange={handlerChangeFilterFrom} />From DB
                </label>
            </div>
        </div>
    )
}

export default FilterAndOrder;
