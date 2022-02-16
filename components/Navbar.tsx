import navStyles from '../styles/Nav.module.scss';
import HamburgerMenu from '../assets/hamburger.svg';
import Back from '../assets/back.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

const NavBar = ({ attr }: any) => {
  const router = useRouter();
  const { id } = router.query;
  const path = router.asPath;

  const onClick = () => {
    if (id) {
      router.push(attr.path);
    } else {
      if (attr.name === '마이페이지' || !attr.isModal) attr.onClick();
      else null;
    }
  };

  const getTitle = () => {
    if (attr.name !== '마이페이지') {
      if (id) {
        return attr.name;
      } else return '니콘내콘';
    } else {
      if (attr.isModal) return '마이페이지';
    }
  };

  return (
    <nav className={navStyles.nav}>
      <button onClick={onClick}>
        {id ? <Image src={Back} /> : <Image src={HamburgerMenu} />}
      </button>
      <div>{getTitle()}</div>
    </nav>
  );
};

export default NavBar;
