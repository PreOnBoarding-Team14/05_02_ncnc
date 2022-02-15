import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';
import Back from '../assets/back.svg';
import { useRouter } from 'next/router';

const NavBar = ({ attr }) => {
  const router = useRouter();
  const { id } = router.query;
  const path = router.asPath;

  return (
    <nav className={navStyles.nav}>
      <button onClick={() => (id ? router.push(attr.path) : null)}>
        {id ? <Back /> : <HamburgerMenu />}
      </button>
      <div>{id ? attr.name : '니콘내콘'}</div>
    </nav>
  );
};

export default NavBar;
