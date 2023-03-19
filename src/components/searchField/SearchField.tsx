import { ReactComponent as SearchLogo } from '../../images/svg/search.svg';
import styles from './searchField.module.scss';

function SearchField() {
  // const dispatch = useAppDispatch();
  // const filterValue = useAppSelector(getFilter);
  // const onChangeFilter = (event: { target: { value: any } }) => {
  //   const { value } = event.target;
  //   if (value === ' ') {
  //     return;
  //   }
  //   dispatch(changeFilter(value));
  // };

  return (
    <form className={styles.formField}>
      <SearchLogo className={styles.formLogo} width={15} />
      <input className={styles.searchField} type="text" placeholder="Filter by name..." />
    </form>
  );
}

export default SearchField;
