// import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ArrowSVG } from '../../images/svg/arrowBack.svg';
import styles from './character.module.scss';

function CharacterPage() {
  return (
    <div className="container">
      <a className={styles.link} href="/">
        <ArrowSVG width={16} />
        Go back
      </a>
      <div className={styles.characterPageWrapper}>
        <div className={styles.imgWrapper}>
          <img src="" alt="" />
        </div>
        <h1 className="title">Rick Sanchez</h1>
        <p className={styles.subtitle}>Informations</p>
        <ul className={styles.featureList}>
          <li className={styles.featureCard}>
            <p className={styles.featureName}>Gender</p>
            <p className={styles.featureValue}>Male</p>
          </li>

          <li className={styles.featureCard}>
            <p className={styles.featureName}>Status</p>
            <p className={styles.featureValue}>Alive</p>
          </li>
          <li className={styles.featureCard}>
            <p className={styles.featureName}>Specie</p>
            <p className={styles.featureValue}>Human</p>
          </li>
          <li className={styles.featureCard}>
            <p className={styles.featureName}>Origin</p>
            <p className={styles.featureValue}> Earth</p>
          </li>
          <li className={styles.featureCard}>
            <p className={styles.featureName}>Type</p>
            <p className={styles.featureValue}>Unknown</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterPage;
