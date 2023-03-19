import Card from '../Card/Card';
import styles from './cardList.module.scss';

function CardLsit() {
  return (
    <ul className={styles.cardList}>
      <Card />

      <Card />

      <Card />
      <Card />
      <Card />
      <Card />
    </ul>
  );
}

export default CardLsit;
