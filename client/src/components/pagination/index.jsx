import styles from './Pagination.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changePage } from '../../redux/actions';

const Pagination = () => {
    const dogs = useSelector((state) => state.dogs);
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const buttonPerPage = useSelector((state) => state.pagination.buttonPagination);
    const totalPages = Math.ceil(dogs.length / itemsPerPage);
    const dispatch = useDispatch();

    const start = Math.max(1, currentPage - (buttonPerPage - 1));
    const end = Math.min(totalPages, start + (buttonPerPage - 1));

    const renderButtons = () => {
        let buttons = [];
        if (totalPages > 1) {
            for (let index = start; index <= end; index++) {
                buttons.push(
                    <button key={index}
                        onClick={() => handlePageChange(index)}
                        className={currentPage !== (index)
                            ? `${styles.btnPagination} ${styles.btnColorNormal}`
                            : `${styles.btnPagination} ${styles.btnColorActive}`}>
                        {index}
                    </button>
                )
            }
        }

        return buttons;
    }

    const handlePageChange = (pageNumber) => {
        dispatch(changePage(pageNumber));
    };

    return (

        <div className={styles.container}>
            <div className={styles.borde}>
                {(currentPage > 1 && dogs.length > buttonPerPage)
                    && <button
                        className={styles.btnArrow}
                        onClick={() => handlePageChange(currentPage - 1)}>
                       <i className={`fas fa-chevron-circle-right fa-rotate-180`} ></i>
                    </button>}

                {(currentPage > buttonPerPage
                    && dogs.length > buttonPerPage)
                    && <div>
                        <button key={1}
                            onClick={() => handlePageChange(1)}
                            className={`${styles.btnPagination} ${styles.btnColorNormal}`}>
                            1
                        </button>
                        <span>...</span>
                    </div>}

                {renderButtons()}

                {(dogs.length > buttonPerPage
                    && end !== totalPages)
                    && <div>
                        <span>...</span>
                        <button key={totalPages}
                            onClick={() => handlePageChange(totalPages)}
                            className={`${styles.btnPagination} ${styles.btnColorNormal}`}>
                            {totalPages}
                        </button>
                    </div>
                }

                {(currentPage < totalPages
                    && dogs.length > buttonPerPage)
                    && <button
                        className={styles.btnArrow}
                        onClick={() => handlePageChange(currentPage + 1)}>
                       <i className={"fas fa-chevron-circle-right"}></i>
                    </button>}
            </div>
        </div>
    )
}

export default Pagination;