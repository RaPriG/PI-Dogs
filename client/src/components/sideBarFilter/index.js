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
        name: '',
        filterTemp: []
    });

    const handlerChangeSearch = (e) => {
        let value = dataFilter.name;
        let filTemp = dataFilter.filterTemp;
        if (!Array.isArray(e)) value = e.target.value;
        else filTemp = e;
        let newArray = {
            ...dataFilter,
            name: value,
            filterTemp: filTemp
        }

        setDataFilter(newArray);
        handlerOnClick(newArray);
    }

    const handlerOnClick = (newArray) => {
        dispatch(actions.filter_dogs(newArray));
    }
    return (
        <div className={styles.container}>
            <Search onChange={handlerChangeSearch} />
            <FilterDog temperaments={temperaments} handlerOnChange={handlerChangeSearch} />
            <OrderDog />
        </div>
    )
}

export default BarraLateralFilter;