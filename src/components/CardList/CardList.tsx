import Card from '../Card/Card';
import styles from './cardList.module.scss';

function CardList() {
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

export default CardList;
