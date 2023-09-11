import styles from './newDog.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import SelectorMultiple from '../controlSelecMulti';
import * as actions from '../../redux/actions';
import imgBackground from '../../img/imgBackgroundPost.jpg';

const validate = (form) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;
    let newError = []

    if (form.name.trim() === '') {
        newError.push('Breed\'s name is empty');
    }
    else if (form.weight_min === '' || form.weight_min === 0) {
        newError.push('The min weight is not valid');
    }
    else if (form.weight_max === '' || form.weight_max === 0) {
        newError.push('The max weight is not valid');
    }
    else if (Number(form.weight_min) > Number(form.weight_max)) {
        newError.push('The min weight cannot be greater than the max weight');
    }
    else if (form.height_min === '' || form.height_min === 0) {
        newError.push('The min height is not valid');
    }
    else if (form.height_max === '' || form.height_max === 0) {
        newError.push('The max height is not valid');
    }
    else if (Number(form.height_min) > Number(form.height_max)) {
        newError.push('The min height cannot be greater than the max height');
    }
    else if (form.life_span_min === '' || form.life_span_min === 0) {
        newError.push('The min life span is not valid');
    }
    else if (form.life_span_max === '' || form.life_span_max === 0) {
        newError.push('The max Life span is not valid');
    }
    else if (Number(form.life_span_min) > Number(form.life_span_max)) {
        newError.push('The min life span cannot be greater than the max life span');
    }
    else if (!form.temperaments.length) {
        newError.push('It is necessary to add some temperament');
    }
    else if (!regex.test(form.image)) {
        newError.push('URL is not valid');
    }


    return newError;

};

const NewDog = () => {
    const dispatch = useDispatch();

    const temperaments = useSelector(state => state.temperaments);

    const [cleanSelect, setCleanSelect] = useState(false);
    const [dog, setDog] = useState({
        name: '',
        weight_min: 0,
        weight_max: 0,
        height_min: 0,
        height_max: 0,
        life_span_min: 0,
        life_span_max: 0,
        temperaments: [],
        image: ''

    });

    const limpiarDog = () => {
        setDog({
            name: '',
            weight_min: 0,
            weight_max: 0,
            height_min: 0,
            height_max: 0,
            life_span_min: 0,
            life_span_max: 0,
            temperaments: [],
            image: ''
        });
        setCleanSelect(true);
    }

    const [errors, setErrors] = useState([]);

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
        });
    }

    const handlerOnSumit = (e) => {
        e.preventDefault();

        const respError = validate(dog);

        setErrors(respError);

        if (respError.length) return;

        const temp = dog.temperaments.map(t => Number(t.id));

        const life_span = `${dog.life_span_min} - ${dog.life_span_max} years`;

        let finalObjDog = { ...dog };
        delete finalObjDog.life_span_min;
        delete finalObjDog.life_span_max;
        finalObjDog.life_span = life_span;
        finalObjDog = { ...finalObjDog, temperaments: temp }
        console.log(finalObjDog);
        dispatch(actions.newDog(finalObjDog))

        limpiarDog();

        alert("Dog Saved");
    }

    return (
        <div className={styles.container}>
            <div>
                <img className={styles.img} src={imgBackground} alt="Background" />
            </div>
            <form className={styles.form} onSubmit={handlerOnSumit}>

                <div className={styles.containerInput}>
                    <label className={styles.label}>Breed:</label>
                    <input className={styles.input}
                        type='text'
                        placeholder="Breed"
                        name='name'
                        value={dog.name}
                        onChange={handlerOnChange} />
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.label}>Weight:</label>
                    <div>
                        <label className={styles.label}>Min.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Weight Min."
                            name='weight_min'
                            value={dog.weight_min}
                            onChange={handlerOnChange} />

                        <label className={styles.label}>Max.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Weight Max."
                            name='weight_max'
                            value={dog.weight_max}
                            onChange={handlerOnChange} />

                    </div>
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.label}>Height:</label>
                    <div>
                        <label className={styles.label}> Min.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Height Min."
                            name='height_min'
                            value={dog.height_min}
                            onChange={handlerOnChange} />

                        <label className={styles.label}> Max.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Height Max."
                            name='height_max'
                            value={dog.height_max}
                            onChange={handlerOnChange} />
                    </div>
                </div>

                <div className={styles.containerInput}>
                    <label className={styles.label}>Life Span:</label>
                    <div>
                        <label className={styles.label}> Min.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Life Span Min"
                            name='life_span_min'
                            value={dog.life_span_min}
                            onChange={handlerOnChange} />

                        <label className={styles.label}> Max.:</label>
                        <input className={styles.inputMinMax}
                            type='number'
                            placeholder="Life Span Max"
                            name='life_span_max'
                            value={dog.life_span_max}
                            onChange={handlerOnChange} />
                    </div>
                </div>
                <div className={`${styles.containerInput} ${styles.select}`}>
                    <label className={styles.label}>Temperaments Selected:</label>
                    <SelectorMultiple
                        temperaments={temperaments}
                        cleanSelect={cleanSelect}
                        handlerChange={handlerSelectTemperaments} />
                </div>
                <div className={styles.containerInput}>
                    <label className={styles.label}>Image:</label>
                    <input className={styles.input}
                        type='text'
                        placeholder="Imgage"
                        name='image'
                        value={dog.image}
                        onChange={handlerOnChange} />
                </div>

                {errors.length ? <div style={{ color: 'red' }}>{errors[0]}</div> : null}
                <button className={styles.btn}
                    type='submit'>Save</button>
            </form>
        </div>
    )

}

export default NewDog;