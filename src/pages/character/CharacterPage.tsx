import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowSVG } from '../../images/svg/arrowBack.svg';
// import rickImg from '../../images/rick.png';
import styles from './character.module.scss';
import { useGetOneCharacterQuery } from '../../redux/charactersAPI';

function CharacterPage() {
  const { id } = useParams();
  console.log('id', id);
  const { data, isLoading, error } = useGetOneCharacterQuery(id);

  const { name, status, species, type, gender, origin, image } = data || {};
  return (
    <>
      {' '}
      {data && (
        <div className="container">
          <Link to="/" className={styles.link}>
            <ArrowSVG className={styles.svgIcon} width={16} />
            Go back
          </Link>
          <div className={styles.characterPageWrapper}>
            <div className={styles.imgWrapper}>
              <img className={styles.characterImg} src={image} alt="rick" />
            </div>
            <h1 className={styles.title}>{name}</h1>
            <p className={styles.subtitle}>Informations</p>
            <ul className={styles.featureList}>
              <li className={styles.featureCard}>
                <p className={styles.featureName}>Gender</p>
                <p className={styles.featureValue}>{gender}</p>
              </li>

              <li className={styles.featureCard}>
                <p className={styles.featureName}>Status</p>
                <p className={styles.featureValue}>{status}</p>
              </li>
              <li className={styles.featureCard}>
                <p className={styles.featureName}>Specie</p>
                <p className={styles.featureValue}>{species}</p>
              </li>
              <li className={styles.featureCard}>
                <p className={styles.featureName}>Origin</p>
                <p className={styles.featureValue}>{origin?.name}</p>
              </li>
              <li className={styles.featureCard}>
                <p className={styles.featureName}>Type</p>
                <p className={styles.featureValue}>{type}</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default CharacterPage;
