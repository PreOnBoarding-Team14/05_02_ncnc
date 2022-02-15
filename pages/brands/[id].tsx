import axios from 'axios';
import NavBar from 'components/Navbar';
import ItemList from 'components/ItemList';
import TopCount from 'components/TopCount';

export default function ProductList({ data, current, name }) {
  const brandsNavbarAttr = { name, path: `/categories/${current}` };

  return (
    <div>
      <NavBar attr={brandsNavbarAttr} />
      <TopCount count={data.length} />
      <ItemList data={data} />
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  const response = await axios.get(
    `https://api2.ncnc.app/con-category1s/nested`,
  );
  const menus = response.data.conCategory1s;
  let candi = [];
  for (let menu of menus) {
    candi.push(...Array.from(menu.conCategory2s));
  }
  const found = candi.find((e) => e.id === +id);
  const current = found.conCategory1Id;
  const res = await axios.get(
    `https://api2.ncnc.app/con-category1s/${current}/nested`,
  );
  const { conCategory2s } = res.data.conCategory1;
  const brand = conCategory2s.find((e) => e.id === +id);
  const { conItems, name } = brand;

  return {
    props: {
      data: conItems,
      current,
      name,
    },
  };
};
