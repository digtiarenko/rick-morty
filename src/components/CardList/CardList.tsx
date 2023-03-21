/* eslint-disable no-console */
import Card from '../Card/Card';
import styles from './cardList.module.scss';
import { getPage } from '../../redux/paginationSlice';
// import { getFilter } from '../../redux/filterSlice';
import { useGetCharactersQuery } from '../../redux/charactersAPI';
import LoadMore from '../LoadMore/LoadMore';
import { useAppSelector } from '../../redux/store';
import { sortResults } from '../../utils/dataFunctions';
import Loading from '../Loading/Loading';

function CardList() {
  const page = useAppSelector(getPage);
  const { data, error, isLoading } = useGetCharactersQuery(page);

  const sortedData = data ? sortResults(data) : null;
  console.log('data', data);
  return (
    <>
      {isLoading && <Loading />}
      {sortedData && (
        <>
          <ul className={styles.cardList}>
            {sortedData?.map((character) => (
              <Card key={character.id} data={character} />
            ))}
          </ul>
          <LoadMore />
        </>
      )}
    </>
  );
}

export default CardList;
