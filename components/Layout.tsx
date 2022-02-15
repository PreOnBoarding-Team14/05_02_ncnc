import { FC, useCallback } from 'react';
import Nav from './Nav';
import Head from 'next/head';

const Layout: FC = ({ children }) => {
  return (
    <div className="container">
      <Head>
        <title>니콘내콘</title>
      </Head>
      {/* <Nav /> */}
      {children}
    </div>
  );
};

export default Layout;
