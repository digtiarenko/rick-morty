import CardLsit from '../../components/CardList/CardList';
import Logo from '../../components/Logo/Logo';
import SearchField from '../../components/searchField/SearchField';

function HomePage() {
  return (
    <div className="container">
      <Logo />
      <SearchField />
      <CardLsit />
    </div>
  );
}

export default HomePage;
