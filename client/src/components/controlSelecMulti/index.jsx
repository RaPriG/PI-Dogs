import styles from './ControlSelecMulti.module.css';
import React, { useEffect, useState } from 'react';

function SelectorMultiple({ temperaments, handlerChange, cleanSelect = false }) {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {

        if (!options.length) {
            setOptions(() => {
                return temperaments.sort((a, b) => {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                });
            });
        }

        if (cleanSelect) setSelectedOptions([])

    }, [options, temperaments, cleanSelect]);

    const optionsSelected = (e) => {
        const optionIndex = e.target.selectedIndex;
        const id = e.target.value;
        const name = e.target[optionIndex].getAttribute('data-title');

        const newListOptions = options.filter(option => option.id !== Number(id))
        setOptions(newListOptions);

        const newListSelec = [...selectedOptions, { id, name }];

        setSelectedOptions(newListSelec);
        handlerChange(newListSelec);
    };

    const optionsUnselected = (optionUnSelec) => {

        const { id, name } = optionUnSelec;

        const newListOptions = [...options, { id: Number(id), name }]
            .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
        setOptions(newListOptions);

        const newListSelec = selectedOptions.filter(option => option.id !== id);

        setSelectedOptions(newListSelec);
        handlerChange(newListSelec);
    };

    return (
        <div >
            <select value="Selection temperaments" className={styles.containerListSelec} onChange={optionsSelected}>
                <option value="">Selection temperaments</option>
                {options.map((option, index) => (
                    <option key={index}
                        value={option.id}
                        data-title={option.name}
                        className={styles.listaSelec}
                    >
                        {option.name}
                    </option>
                ))}
            </select>

            <ul className={styles.containerListSelected}>
                {selectedOptions.map((option, index) => (
                    <li key={index} className={styles.itemSelected}>
                        {option.name}
                        <div className={styles.close}
                            onClick={() => optionsUnselected(option)}>
                            x
                        </div>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default SelectorMultiple;