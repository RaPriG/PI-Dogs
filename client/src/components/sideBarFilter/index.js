import { useState } from 'react';
import Search from '../searchBar';
import FilterDog from '../filterDog';
import styles from './sideBarFilter.module.css';
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'


const BarraLateralFilter = () => {
    const dispatch = useDispatch();
    const [dataFilter, setDataFilter] = useState({
        name: ''
    });

    const handlerChangeSearch = (e) => {
        const { value } = e.target;
        let newArray={
            ...dataFilter,
            name: value
        }
        setDataFilter(newArray);
        handlerOnClick();
    }

    const handlerOnClick = () => {
        dispatch(actions.filter_dogs(dataFilter));
    }
    return (
        <div className={styles.container}>
            <Search onChange={handlerChangeSearch} handlerOnClick={handlerOnClick} />
            <FilterDog />
        </div>
    )
}

export default BarraLateralFilter;