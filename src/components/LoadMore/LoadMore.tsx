import styles from './loadMore.module.scss';

function LoadMore() {
  return (
    <button className={styles.loadMoreBtn} type="button">
      Load more
    </button>
  );
}

export default LoadMore;
