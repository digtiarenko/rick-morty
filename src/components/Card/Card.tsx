import styles from './card.module.scss';

function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src="" alt="" />
      </div>
      <div className={styles.cardFooter}>
        <h4 className={styles.cardTitle}>Rick Sanchez</h4>
        <p className="cardSubtitle">Human</p>
      </div>
    </li>
  );
}

export default Card;