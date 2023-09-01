import { useEffect, useState } from 'react';
import Card from '../card'
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';

const Cards = ({ onClose }) => {
    const dogs = useSelector(state => state.dogs);
    const [filterDogs, setFilterDogs] = useState([]);
    useEffect(() => {
        setFilterDogs(dogs)
    }, [dogs]);

    return (

        <div className={styles.container}>
            {!filterDogs.length ? null : dogs.map((dog, index) => {
                return <Card {...dog} key={index} onClose={onClose} />
            })}
        </div>
    )
}

export default Cards;