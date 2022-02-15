import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';
import Back from '../assets/back.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar = ({ attr }) => {
  const router = useRouter();
  const { id } = router.query;
  const path = router.asPath;

  return (
    <nav className={navStyles.nav}>
      <button onClick={() => (id ? router.push(attr.path) : null)}>
        {id ? <Image src={Back} /> : <Image src={HamburgerMenu} />}
      </button>
      <div>{id ? attr.name : '니콘내콘'}</div>
    </nav>
  );
};

export default NavBar;
