import Head from 'next/head';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../../styles/pages/Collection.module.css';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Products from '../../../components/Products';
import { excuteQuery } from '../../../lib/db';

export async function getStaticProps() {
  let data;
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM Products WHERE category_id=5;',
    });
    data = JSON.stringify(result);
    // console.log(result[1]);
  } catch (error) {
    data = 'error';
  }

  return {
    props: {
      data,
    },
  };
}

export default function MenAccessories({ data }) {
  const dataObj = JSON.parse(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>ShopShop</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>
      <main className={styles.main}>
        <div className={styles.figure}>
          <Image
            src="/images/accessories2.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <h1 className={styles.heading}>Men Accessories</h1>

        <Products data={dataObj} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

MenAccessories.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
