import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <button>
        <HamburgerMenu />
      </button>
      <div>니콘내콘</div>
    </nav>
  );
}

export default Nav;
