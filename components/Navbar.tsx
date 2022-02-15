import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';
import Back from '../assets/back.svg';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  const { id } = router.query;
  const path = router.asPath;

  return (
    <nav className={navStyles.nav}>
      <button onClick={() => (id ? router.push('/') : null)}>
        {id ? <Back /> : <HamburgerMenu />}
      </button>
      <div>니콘내콘</div>
    </nav>
  );
};

export default NavBar;
