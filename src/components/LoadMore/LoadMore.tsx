import { addPage } from '../../redux/paginationSlice';
import { useAppDispatch } from '../../redux/store';
import styles from './loadMore.module.scss';

function LoadMore() {
  const dispatch = useAppDispatch();
  return (
    <button onClick={() => dispatch(addPage())} className={styles.loadMoreBtn} type="button">
      Load more
    </button>
  );
}

export default LoadMore;
