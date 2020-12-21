import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeBanner from '../components/HomeBanner';
import Products from '../components/Products';
import styles from '../styles/Home.module.css';
import { excuteQuery } from '../lib/db';
import ImgLinks from '../components/ImgLinks';

export async function getStaticProps() {
  let data;
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM Products WHERE category_id=4;',
    });
    data = JSON.stringify(result);
  } catch (error) {
    data = 'error';
  }

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const dataObj = JSON.parse(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.headerBox}>
        <Header />
        <HomeBanner />
      </header>
      <main className={styles.main}>
        <h1 className={styles.heading}>Featured Products</h1>
        <Products data={dataObj} />
        <div className={styles.background}>
          <p className={styles.text}>
            Discover Yourself{' '}
            <Link href="/collection/women/accessories">
              <a className={styles.shopBtn}>
                <br />
                Accessories
              </a>
            </Link>
          </p>
        </div>
        <BackgroundImage />
        <ImgLinks />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
Home.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
