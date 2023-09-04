import { useState } from 'react';
import styles from './filterDog.module.css';
import Select from 'react-select';

const FilterAndOrder = ({ temperaments }) => {
    const [selectedTemperaments, setSelectedTemperaments] = useState([]);
    console.log("SELECTED: ", temperaments);
    const handlerSelectTemperaments = (selected) => {
        console.log("SELECTEDHANDLER", selectedTemperaments, "--", selected);
        if (selectedTemperaments.length > 4
            && selected.length > selectedTemperaments.length) {
            console.log("Limite de seleccion alcanzado");
        } else {
            setSelectedTemperaments(selected);
        }
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '20px', // Altura del control
          }),
          dropdownIndicator: (provided, state) => ({
            ...provided,
            width: '16px', // Ancho de la flecha de selección
            height: '16px', // Altura de la flecha de selección
          }),
          clearIndicator: (provided, state) => ({
            ...provided,
            width: '16px', // Ancho del icono "x"
            height: '16px', // Altura del icono "x"
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
                            {selectedTemperaments.map(temp => (
                                <option key={temp.value}>{temp.label}</option>
                            ))}
                        </Select>
                        {/* <ul>
                        {selectedTemperaments.map((option) => (
                            <li key={option.id}>{option.name}</li>
                        ))}
                    </ul> */}
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
