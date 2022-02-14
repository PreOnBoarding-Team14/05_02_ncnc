import React, { FC, useCallback } from 'react';
import Nav from './Nav';

const Layout: FC = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Layout;
