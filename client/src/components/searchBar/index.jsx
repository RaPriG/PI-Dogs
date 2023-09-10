import styles from './SearchBar.module.css'
const Search = ({ handlerOnChange, handlerOnClick }) => {

    return (
        <div className={styles.container}>
            <h5 className={styles.titulo}>Search</h5>
            <input className={styles.input} placeholder='Search by breed' onChange={handlerOnChange} />
        </div>
    )
}

export default Search;