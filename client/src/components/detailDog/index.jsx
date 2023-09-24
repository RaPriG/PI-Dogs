import { Link, useParams } from 'react-router-dom';
import styles from './detailDog.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { findById } from '../../redux/actions';


const DetailDog = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const dog = useSelector(state => state.dogDetail[0]);

    useEffect(() => {

        dispatch(findById(id));

        return () => {
            dispatch(findById(false));
        }

    }, [dispatch, id]);


    return (
        <div className={styles.container}>
            <div style={{zIndex:3}}><Link to={'/home'} ><i className={`fas fa-undo-alt ${styles.iconBack}`}></i></Link></div>
            <div className={styles.containerDetail}>

                <div className={styles.containerImg}>
                    <img src={dog?.image} alt={dog?.name} className={styles.img} />
                </div>

                <div style={{ margin: 10 }}>
                    <h2 className={styles.id}>ID: {dog?.id}</h2>
                    <h2 className={styles.name}>Breed: {dog?.name}</h2>
                    <h2 className={styles.height}>Height: {dog?.height_min}cm - {dog?.height_max}cm</h2>
                    <h2 className={styles.weight}>Weight: {dog?.weight_min}kg - {dog?.weight_max}kg</h2>
                    <h2 className={styles.temperament}>Temperaments: {dog?.temperament}</h2>
                    <h2 className={styles.lifeSpan}>Life Span: {dog?.life_span}</h2>
                </div>
            </div>
        </div>
    )
}



export default DetailDog;