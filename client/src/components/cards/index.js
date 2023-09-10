import Card from '../card'
import styles from './Cards.module.css';
import { useSelector } from 'react-redux';
import Pagination from '../pagination';

const Cards = ({ onClose }) => {
    const dogs = useSelector(state => state.dogs);
    const currentPage = useSelector((state) => state.pagination.currentPage);
    const itemsPerPage = useSelector((state) => state.pagination.itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataPerPage = dogs.slice(startIndex, endIndex);

    
    return (
        <div className={styles.container}>
            {!dataPerPage.length ? null : dataPerPage.map((dog, index) => {
                return <Card {...dog} key={index} onClose={onClose} />;
            })}
            <Pagination />
        </div>
    )
}

export default Cards;