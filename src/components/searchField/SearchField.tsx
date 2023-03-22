import { ReactComponent as SearchLogo } from '../../images/svg/search.svg';
import styles from './searchField.module.scss';

function SearchField({ query, handleChange }: { query: string; handleChange: (value: string) => void }) {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    handleChange(value.trim());
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles.formField}>
      <SearchLogo className={styles.formLogo} />
      <input
        className={styles.searchField}
        value={query}
        onChange={changeInput}
        type="text"
        placeholder="Filter by name..."
      />
    </form>
  );
}

export default SearchField;
