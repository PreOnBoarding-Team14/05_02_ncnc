import axios from 'axios';
import ItemList from 'components/ItemList';
import Warning from 'components/Warning';
import NavBar from 'components/Navbar';
import EmptyBox from 'components/EmptyBox';
import itemStyles from '../../styles/Item.module.scss';

export default function BrandList({ data }) {
  const itemNavbarAttr = { name: '', path: '/' };

  return (
    <div className={itemStyles.div}>
      <NavBar attr={itemNavbarAttr} />
      <EmptyBox />
      <ItemList data={data} />
      <Warning />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await axios.get(`https://api2.ncnc.app/con-items/${id}`);
  const { conItem } = res.data;
  return {
    props: {
      data: [conItem],
    },
  };
};
