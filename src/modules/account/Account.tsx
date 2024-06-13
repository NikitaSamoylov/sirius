import React from 'react';
import Header from '../../components/header/Header';
import Nav from '../../components/nav/Nav';
import styles from './Account.module.scss';
import { Outlet } from 'react-router';

const Account: React.FC = () => {

  return (
    <section>
      <div className="container">
        <div className={ styles.main }>
          <Nav />
          <div className={ styles.main__content }>
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Account;