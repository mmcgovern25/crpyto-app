// Layout.jsx
import React from 'react';
import styles from '../style';

const Layout = ({ children }) => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        </div>
      </div>

      <div className={`bg-primary  ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
