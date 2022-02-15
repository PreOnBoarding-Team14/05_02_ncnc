import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';
import { useRouter } from 'next/router';

function Nav() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <nav className={navStyles.nav}>
      <button>{id ? null : <HamburgerMenu />}</button>
      <div>니콘내콘</div>
    </nav>
  );
}

export default Nav;
