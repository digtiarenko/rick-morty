/* eslint-disable no-nested-ternary */
import { useSearchParams } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';
import Loading from '../../components/Loading/Loading';
import LoadMore from '../../components/LoadMore/LoadMore';
import Logo from '../../components/Logo/Logo';
import SearchField from '../../components/searchField/SearchField';
import SignIn from '../../components/SignIn/SignIn';
import { useGetCharactersQuery } from '../../redux/charactersAPI';
import { getPage, setPageToOne } from '../../redux/paginationSlice';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { sortResults } from '../../utils/dataFunctions';

function HomePage() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') || '';
  const page = useAppSelector(getPage);
  const { data, error } = useGetCharactersQuery({ page, query });

  const handleChange = (searchQuery: string) => {
    dispatch(setPageToOne());
    setSearchParams({ name: searchQuery });
  };
  const sortedData = data ? sortResults(data) : null;
  const shouldRenderMoreBtn = !(error || !(sortedData && sortedData.length % 20 === 0 && sortedData.length !== 0));
  const sohuldShowError = !!error;
  return (
    <div className="container">
      <SignIn />
      <Logo />
      <SearchField query={query} handleChange={handleChange} />
      {sortedData && !error && <CardList data={sortedData} />}
      {sohuldShowError && <Loading message="404" />}
      {shouldRenderMoreBtn && <LoadMore />}
    </div>
  );
}

export default HomePage;
