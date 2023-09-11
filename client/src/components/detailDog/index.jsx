import { Link, useParams } from 'react-router-dom';
import styles from './detailDog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { findById } from '../../redux/actions';
import imgBackground from '../../img/imgBackgroundPost.jpg';
import { FaArrowLeft } from "react-icons/fa";
const DetailDog = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const dog = useSelector(state => state.dogDetail[0]);
    useEffect(() => {
        dispatch(findById(id));
    }, [dispatch, id]);


    console.log(dog);
    return (
        <div className={styles.container}>
            <Link to={'/home'} ><FaArrowLeft className={styles.iconBack}/></Link>
            <div className={styles.containerDetail}>

                <div className={styles.containerImg}>

                    <img src={dog?.image} alt={dog?.name} className={styles.img} />
                </div>

                <div style={{ margin: 10 }}>
                    <h2 className={styles.name}>Breed: {dog?.name}</h2>
                    <h2 className={styles.id}>ID: {dog?.id}</h2>
                    <h2 className={styles.height}>Height: {dog?.height_min} - {dog?.height_max}</h2>
                    <h2 className={styles.weight}>Weight: {dog?.weight_min} - {dog?.weight_max}</h2>
                    <h2 className={styles.temperament}>Temperaments: {dog?.temperament}</h2>
                    <h2 className={styles.lifeSpan}>Life Span: {dog?.life_span}</h2>
                </div>
            </div>
        </div>
    )
}



export default DetailDog;