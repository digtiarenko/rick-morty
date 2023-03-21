import { FallbackProps } from 'react-error-boundary';
import errorGif from '../../images/gif/error.gif';
import styles from './errorFallback.module.scss';

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div className="container">
      <div className={styles.errorWrapper}>
        <img width={150} src={errorGif} alt="Ooops" />
        <p className={styles.errorTitle}>Ooopsy</p>
        <p className={styles.errorMessage}>{error.message}</p>
      </div>
    </div>
  );
}

export default ErrorFallback;
