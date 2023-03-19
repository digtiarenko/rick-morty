import styles from './card.module.scss';

function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        <img src="" alt="" />
      </div>
      <div className={styles.cardFooter}>
        <h4 className={styles.cardTitle}>Ants n</h4>
        <p className={styles.cardSubtitle}>Human</p>
      </div>
    </li>
  );
}

export default Card;
