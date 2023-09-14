import styles from './SearchBar.module.css';
const Search = ({ handlerOnChange, name }) => {


    return (
        <div className={styles.container}>
            <div>
                <h5 className={styles.titulo}>Search</h5>
            </div>
            <input className={styles.input}
                placeholder='Search by breed'
                onChange={handlerOnChange}
                value={name} />
        </div>
    )
}

export default Search;