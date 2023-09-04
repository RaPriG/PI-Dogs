import { useState } from 'react';
import Search from '../searchBar';
import FilterDog from '../filterDog';
import OrderDog from '../orderDog';
import styles from './sideBarFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'


const BarraLateralFilter = () => {
    const temperaments = useSelector(state => state.temperaments);
    const dispatch = useDispatch();
    const [dataFilter, setDataFilter] = useState({
        name: ''
    });

    const handlerChangeSearch = (e) => {
        const { value } = e.target;
        let newArray = {
            ...dataFilter,
            name: value
        }
        setDataFilter(newArray);
        handlerOnClick(newArray);
    }

    const handlerOnClick = (newArray) => {
        dispatch(actions.filter_dogs(newArray));
    }
    return (
        <div className={styles.container}>
            <Search onChange={handlerChangeSearch} handlerOnClick={handlerOnClick} />
            <FilterDog temperaments={temperaments} />
            <OrderDog />
        </div>
    )
}

export default BarraLateralFilter;