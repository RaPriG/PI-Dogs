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
        filter: {
            fromApi: false,
            fromDB: false,
            temperaments: []
        },
        order: {
            by: 'breed',
            ascDesc: 'ascending',
        }
    });

    const handlerChangeName = (e) => {
        let { value } = e.target;
        const newArray = {
            ...dataFilter,
            name: value,
        }

        setDataFilter(newArray);
        handlerOnClick(newArray);
    }

    const handlerChangeFilter = (data) => {

        const newTemp = data.temperaments.map(temp => temp.name);
        const { fromApi, fromDB } = data;
        const newObj = {
            ...dataFilter,
            filter: {
                ...dataFilter.filter,
                temperaments: newTemp,
                fromApi,
                fromDB
            }
        }

        setDataFilter(newObj);
        handlerOnClick(newObj);
    }

    const handlerChangeOrder = (data) => {
        const { name, value } = data.target;

        const newObj = {
            ...dataFilter,
            order: {
                ...dataFilter.order,
                [name]: value,
            }
        }

        setDataFilter(newObj);
        handlerOnClick(newObj);

    }

    const handlerOnClick = (newObj) => {
        //se reinicia la paginacion para una nueva busqueda
        dispatch(actions.changePage(1));
        //busqueda por filter
        dispatch(actions.filter_dogs(newObj));
    }
    return (
        <div className={styles.container}>
            <Search handlerOnChange={handlerChangeName} />
            <FilterDog temperaments={temperaments} handlerOnChange={handlerChangeFilter} />
            <OrderDog handlerOnChange={handlerChangeOrder} dataOrder={dataFilter.order} />
        </div>
    )
}

export default BarraLateralFilter;