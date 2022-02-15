import { getConCategories } from 'apis/main';
import axios from 'axios';
import NavBar from 'components/Navbar';
import Grid from 'components/Grid';
import MainText from 'components/MainText';
import ItemList from 'components/ItemList';
import IndexStyles from '../styles/Index.module.scss';

export default function Home({ conCategories, conItems }) {
  return (
    <div className={IndexStyles.container}>
      <NavBar />
      <Grid data={conCategories} />
      <MainText />
      <ItemList data={conItems} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await getConCategories();
  const conCategories = res.conCategory1s;

  const res2 = await axios.get('https://api2.ncnc.app/con-items/soon');
  const { conItems } = res2.data;
  return {
    props: {
      conCategories,
      conItems,
    },
  };
};
