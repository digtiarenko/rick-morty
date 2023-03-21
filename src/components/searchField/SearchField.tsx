import { ReactComponent as SearchLogo } from '../../images/svg/search.svg';
import { changeFilter, getFilter } from '../../redux/filterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import styles from './searchField.module.scss';

function SearchField() {
  const dispatch = useAppDispatch();
  const filterValue = useAppSelector(getFilter);
  const onChangeFilter = (event: { target: { value: string } }) => {
    const { value } = event.target;
    if (value === ' ') {
      return;
    }
    dispatch(changeFilter(value));
  };

  return (
    <form className={styles.formField}>
      <SearchLogo className={styles.formLogo} />
      <input
        className={styles.searchField}
        value={filterValue}
        onChange={onChangeFilter}
        type="text"
        placeholder="Filter by name..."
      />
    </form>
  );
}

export default SearchField;
