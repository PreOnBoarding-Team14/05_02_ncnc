import { useState } from 'react';
import axios from 'axios';
import { getConCategories } from 'apis/main';
import NavBar from 'components/Navbar';
import Grid from 'components/Grid';
import MainText from 'components/MainText';
import ItemList from 'components/ItemList';
import EmptyBox from 'components/EmptyBox';
import Modal from 'components/Modal';
import IndexStyles from '../styles/Index.module.scss';

function Home({ conCategories, conItems }: any) {
  const [isModal, setIsModal] = useState(false);

  function onClick() {
    setIsModal(!isModal);
  }

  const modalAttr = { name: '', path: '', isModal, onClick };

  return (
    <div className={IndexStyles.container}>
      <NavBar attr={modalAttr} />
      <EmptyBox />
      <Grid data={conCategories} />
      {!isModal ? (
        <>
          <MainText />
          <ItemList data={conItems} />
        </>
      ) : (
        <Modal onClick={onClick} isModal />
      )}
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

export default Home;
