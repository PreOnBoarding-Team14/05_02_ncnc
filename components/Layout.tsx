import { FC, useCallback } from 'react';
import Head from 'next/head';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>니콘내콘</title>
      </Head>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
