import { Link, useLocation } from 'react-router-dom';
import styles from './card.module.scss';
import { NormalizedCharacter } from '../../types/types';

function Card({ data }: { data: NormalizedCharacter }) {
  const location = useLocation();
  const { id, name, species, image } = data;
  return (
    <Link to={`/characters/${id}`} state={{ from: location }}>
      <li className={styles.card}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={image} alt="rick" />
        </div>
        <div className={styles.cardFooter}>
          <h4 className={styles.cardTitle}>{name}</h4>
          <p className={styles.cardSubtitle}>{species}</p>
        </div>
      </li>
    </Link>
  );
}

export default Card;
