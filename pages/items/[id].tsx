// items/[id].tsx
// 브랜드 상품 리스트에 있는 상품 클릭 시 보여주는 상품 정보 화면

import axios from 'axios';
import ItemList from 'components/ItemList';

export default function BrandList({ data }) {
  const text = data[0].warning;
  return (
    <div>
      <ItemList data={data} />
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
