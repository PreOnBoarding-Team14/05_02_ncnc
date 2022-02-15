import axios from 'axios';
import { useRouter } from 'next/router';
import ItemList from 'components/ItemList';

// brands/[id]
// 상품리스트

export default function ProductList({ data }) {
  const router = useRouter();
  const { id, current } = router.query;

  return <ItemList data={data} />;
}

export const getServerSideProps = async ({ query }) => {
  const { id, current } = query;

  if (!current) {
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
    console.log(current);
    const res = await axios.get(
      `https://api2.ncnc.app/con-category1s/${current}/nested`,
    );
    const { conCategory2s } = res.data.conCategory1;
    const brand = conCategory2s.find((e) => e.id === +id);
    const { conItems } = brand;

    return {
      props: {
        data: conItems,
      },
    };
  } else {
    const res = await axios.get(
      `https://api2.ncnc.app/con-category1s/${current}/nested`,
    );
    const { conCategory2s } = res.data.conCategory1;
    const brand = conCategory2s.find((e) => e.id === +id);
    const { conItems } = brand;
    return {
      props: {
        data: conItems,
      },
    };
  }
};
