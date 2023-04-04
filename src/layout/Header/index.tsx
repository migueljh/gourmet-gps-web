import styles from './header.module.scss';
import { DoggyRefreshingIcon } from '../../Icons/header.icons';
import { Link } from 'react-router-dom';

const Header = (): JSX.Element => {
  return (
    <div className={styles.headerWrapper}>
      <nav className={styles.headerTextLogoContainer}>
        <Link to={`/`}>
          <div className={styles.headerLogoText}>
            <h1>Gourmet GPS</h1>
            <i>
              <DoggyRefreshingIcon />
            </i>
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
