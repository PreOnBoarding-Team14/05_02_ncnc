import axios from 'axios';
import ItemList from 'components/ItemList';
import Warning from 'components/Warning';
import NavBar from 'components/Navbar';
import EmptyBox from 'components/EmptyBox';
import itemStyles from '../../styles/Item.module.scss';
import SelectBtn from 'components/SelectBtn';
import { useState } from 'react';

function BrandList({ data }: any) {
  const brand = data[0].conCategory2Id;
  const itemNavbarAttr = { name: '', path: `/brands/${brand}` };
  const options = data[0].options;
  const originalPrice = data[0].originalPrice;
  const [isClicked, setIsClicked] = useState(false);
  const [option, setOption] = useState('');

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleOption = (option: string) => {
    setOption(option);
  };

  return (
    <div className={itemStyles.div}>
      <NavBar attr={itemNavbarAttr} />
      <EmptyBox />
      <ItemList data={data} />
      <Warning isClicked={isClicked} />
      <SelectBtn
        options={options}
        isClicked={isClicked}
        handleClick={handleClick}
        originalPrice={originalPrice}
        option={option}
        handleOption={handleOption}
      />
    </div>
  );
}

export const getServerSideProps = async ({ query }: any) => {
  const { id } = query;
  const res = await axios.get(`https://api2.ncnc.app/con-items/${id}`);
  const { conItem } = res.data;
  return {
    props: {
      data: [conItem],
    },
  };
};

export default BrandList;
