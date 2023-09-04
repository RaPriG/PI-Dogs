import { useState } from 'react';
import styles from './filterDog.module.css';
import Select from 'react-select';

const FilterAndOrder = ({ temperaments, handlerOnChange }) => {

    const [selectedTemperaments, setSelectedTemperaments] = useState([]);

    const handlerSelectTemperaments = (selected) => {
        setSelectedTemperaments(selected);
        handlerOnChange(selected);
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '20px', // Altura del control
            maxHeight: '72px',
            overflowY: 'auto',
        }),
        dropdownIndicator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
        clearIndicator: (provided, state) => ({
            ...provided,
            display: 'none'
        }),
    };


    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Filter</h5>
            <div className={styles.containerInput}>

                <label>
                    Temperaments
                    <div className={styles.select}>
                        <Select
                            options={temperaments}
                            isMulti={true}
                            value={selectedTemperaments}
                            isSearchable={true}
                            onChange={handlerSelectTemperaments}
                            styles={customStyles}
                            maxMenuHeight={150}
                        >
                        </Select>
                    </div>
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
        </div>
    )
}

export default FilterAndOrder;
