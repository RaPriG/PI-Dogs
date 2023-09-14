import Search from '../searchBar';
import FilterDog from '../filterDog';
import OrderDog from '../orderDog';
import styles from './sideBarFilter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

const BarraLateralFilter = () => {
    const temperaments = useSelector(state => state.temperaments);
    const dataFilter = useSelector(state => state.dataFilter);
    const showSideBar = useSelector(state => state.showSideBar);
    const dispatch = useDispatch();

    const updateDataFilter = (newData) => {
        dispatch(actions.updateDataFilter(newData));
    }

    const handlerChangeName = (e) => {
        let { value } = e.target;
        const newDataFilter = {
            ...dataFilter,
            name: value,
        }

        applyFilter(newDataFilter);
    }

    const handlerChangeFilter = (data) => {

        const newDataFilter = {
            ...dataFilter,
            filter: data
        }

        applyFilter(newDataFilter);
    }

    const handlerChangeOrder = (data) => {
        const { name, value } = data.target;

        const newDataFilter = {
            ...dataFilter,
            order: {
                ...dataFilter.order,
                [name]: value,
            }
        }

        applyFilter(newDataFilter);

    }

    const handlerOnClickShowMenu = () => {
        dispatch(actions.isShowSideBar());
    }

    const resetPagionation = () => {
        dispatch(actions.changePage(1));
    }

    const applyFilter = (newDataFilter) => {

        //update global state dataFilter
        updateDataFilter(newDataFilter);

        //se reinicia la paginacion para una nueva busqueda
        resetPagionation();

        //filter data
        dispatch(actions.filter_dogs(newDataFilter));
    }

    return (
        <div className={showSideBar
            ? `${styles.container} ${styles.show}`
            : `${styles.container} ${styles.hide}`}>

            <Search handlerOnChange={handlerChangeName}
                name={dataFilter.name} />

            <FilterDog temperaments={temperaments} handlerOnChange={handlerChangeFilter} />

            <i className={showSideBar
                ? `fas fa-bars ${styles.iconShowSideBar} ${styles.posIconShowSideBar}`
                : `fas fa-bars ${styles.iconShowSideBar} ${styles.posIconHideSideBar}`} 
                onClick={handlerOnClickShowMenu}></i>

            <OrderDog handlerOnChange={handlerChangeOrder} dataOrder={dataFilter.order} />

        </div>
    )
}

export default BarraLateralFilter;