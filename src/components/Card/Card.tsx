import { Link } from 'react-router-dom';
import styles from './card.module.scss';
import rickImg from '../../images/rick2.png';

function Card() {
  return (
    <Link to="/characters/48">
      <li className={styles.card}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src={rickImg} alt="rick" />
        </div>
        <div className={styles.cardFooter}>
          <h4 className={styles.cardTitle}>Rick Sanchez</h4>
          <p className={styles.cardSubtitle}>Human</p>
        </div>
      </li>
    </Link>
  );
}

export default Card;
