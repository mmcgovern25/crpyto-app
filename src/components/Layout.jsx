import React from 'react';
import styles from './style';
import { Navbar, Footer } from './components';

const Layout = ({ Dashboard, Header, Coinpage }) => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {Dashboard}
          {Header}
          {Coinpage}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
