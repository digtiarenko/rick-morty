import styles from './page404.module.scss';
import errorGif from '../../images/gif/error.gif';

function Page404() {
  return (
    <div className="container">
      <div className={styles.errorWrapper}>
        <img width={150} src={errorGif} alt="Ooops" />
        <p className={styles.errorTitle}>NOT FOUND</p>
      </div>
    </div>
  );
}

export default Page404;
