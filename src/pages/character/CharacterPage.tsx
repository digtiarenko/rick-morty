import { Link } from 'react-router-dom';
import { ReactComponent as ArrowSVG } from '../../images/svg/arrowBack.svg';
import rickImg from '../../images/rick.png';
import styles from './character.module.scss';

function CharacterPage() {
  return (
    <div className="container">
      <Link to="/" className={styles.link}>
        <ArrowSVG className={styles.svgIcon} width={16} />
        Go back
      </Link>
      {/* <div className={styles.characterPageWrapper}> */}
      <div className={styles.imgWrapper}>
        <img className={styles.characterImg} src={rickImg} alt="rick" />
        {/* </div> */}
        <h1 className={styles.title}>Rick Sanchez</h1>
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
