import styles from './newDog.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import SelectorMultiple from '../controlSelecMulti';
import * as actions from '../../redux/actions'

const NewDog = () => {
    const dispatch = useDispatch();

    const temperaments = useSelector(state => state.temperaments);

    const [dog, setDog] = useState({
        name: '',
        weight_min: 0,
        weight_max: 0,
        height_min: 0,
        height_max: 0,
        life_span: '',
        temperaments: [],
        image: ''

    });

    const handlerSelectTemperaments = (selected) => {
        setDog({
            ...dog,
            temperaments: selected
        })
    }

    const handlerOnChange = (e) => {
        const { name, value } = e.target;
        setDog({
            ...dog,
            [name]: value
        })
    }

    const handlerOnSumit = (e) => {
        e.preventDefault();
        const temp = dog.temperaments.map(t => t.value);
        dispatch(actions.newDog({ ...dog, temperaments: temp }))
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handlerOnSumit}>

                <label >Breed</label>
                <input type='text'
                    placeholder="Breed"
                    name='name'
                    value={dog.name}
                    onChange={handlerOnChange} />

                <label >Weight Min.</label>
                <input type='number'
                    placeholder="Weight Min."
                    name='weight_min'
                    value={dog.weight_min}
                    onChange={handlerOnChange} />

                <label >Weight Max.</label>
                <input type='number'
                    placeholder="Weight Max."
                    name='weight_max'
                    value={dog.weight_max}
                    onChange={handlerOnChange} />

                <label >Height Min.</label>
                <input type='number'
                    placeholder="Height Min."
                    name='height_min'
                    value={dog.height_min}
                    onChange={handlerOnChange} />

                <label>Height Max.</label>
                <input type='number'
                    placeholder="Height Max."
                    name='height_max'
                    value={dog.height_max}
                    onChange={handlerOnChange} />

                <label>Life Span</label>
                <input type='text'
                    placeholder="Life Span"
                    name='life_span'
                    value={dog.life_span}
                    onChange={handlerOnChange} />
                    
                <SelectorMultiple
                    temperaments={temperaments}
                    handlerChange={handlerSelectTemperaments} />

                <label>Image</label>
                <input type='text'
                    placeholder="Imgage"
                    name='image'
                    value={dog.image}
                    onChange={handlerOnChange} />
                <button type='submit'>Save</button>
            </form>
        </div>
    )

}

export default NewDog;