import axios from 'axios';
import { useRouter } from 'next/router';
import { getConCategories } from 'apis/main';
import NavBar from 'components/Navbar';
import Grid from 'components/Grid';
import ItemList from 'components/ItemList';
import EmptyBox from 'components/EmptyBox';
import TopCategories from 'components/TopCategories';

export default function BrandList({ data, conCategories }) {
  const router = useRouter();
  const { id } = router.query;
  const categoriesNavAttr = { name: data.name, path: '/' };
  const salesNavAttr = { name: '땡철이', path: '/' };

  return (
    <div>
      <NavBar attr={id === '1' ? salesNavAttr : categoriesNavAttr} />
      <TopCategories list={conCategories} />
      {id === '1' ? (
        <>
          <ItemList data={data} />
        </>
      ) : (
        <Grid data={data.conCategory2s} />
      )}
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const res = await getConCategories();
  const conCategories = res.conCategory1s;

  if (id === '1') {
    // 땡처리 상품일 경우
    const res = await axios.get('https://api2.ncnc.app/con-items/soon');
    const { conItems } = res.data;

    return {
      props: {
        data: conItems,
        conCategories,
      },
    };
  } else {
    // 다른 상품 종류일 경우
    const res = await axios.get(
      `https://api2.ncnc.app/con-category1s/${id}/nested`,
    );
    const { conCategory1 } = res.data;
    console.log(res.data);
    return {
      props: {
        data: conCategory1,
        conCategories,
      },
    };
  }
};
