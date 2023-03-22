import Card from '../Card/Card';
import styles from './cardList.module.scss';

import { NormalizedCharacter } from '../../types/types';

function CardList({ data }: { data: NormalizedCharacter[] }) {
  return (
    <ul className={styles.cardList}>
      {data.map((character: NormalizedCharacter) => (
        <Card key={character.id} data={character} />
      ))}
    </ul>
  );
}

export default CardList;
