import Card from '../card'
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';
import Pagination from '../pagination';

const Cards = ({ onClose }) => {
    const dogs = useSelector(state => state.dogs);
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);
    const showSideBar = useSelector((state) => state.showSideBar);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataPerPage = dogs.slice(startIndex, endIndex);

    return (
        <div className={showSideBar
            ? `${styles.container} ${styles.endContainer}`
            : `${styles.container} ${styles.centerContainer}`}>
            <div className={styles.containerCards}>
                {!dataPerPage.length ? null : dataPerPage.map((dog, index) => {
                    return <Card {...dog} key={index} onClose={onClose} />;
                })}
                <Pagination />
            </div>
        </div>
    )
}

export default Cards;