import { Fragment } from 'react';
import MainHeader from './MainHeader';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader setModal={props.setModal} />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
