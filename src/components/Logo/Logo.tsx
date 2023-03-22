import { useLocation, Link } from 'react-router-dom';
import logo_small from '../../images/r&m_300.png';
import logo_medium from '../../images/r&m_600.png';
import styles from './logo.module.scss';

function Logo() {
  const location = useLocation();

  return (
    <Link to="/" state={{ from: location }}>
      <img
        className={styles.logo}
        srcSet={`${logo_small} 300w, ${logo_medium} 600w`}
        sizes="(min-width: 1196px) 600px, (min-width: 360px) 312px"
        src={logo_small}
        alt="rick and morty logo"
      />
    </Link>
  );
}

export default Logo;
