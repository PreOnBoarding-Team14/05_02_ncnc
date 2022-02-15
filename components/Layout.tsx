import { FC, useCallback } from 'react';
import Head from 'next/head';
import NavBar from 'components/Navbar';
const Layout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
