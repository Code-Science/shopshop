import Head from 'next/head';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Products from '../../../components/Products';
import styles from '../../../styles/pages/Collection.module.css';
import { excuteQuery } from '../../../lib/db';

export async function getStaticProps() {
  let data;
  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM Products WHERE category_id=2;',
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

export default function MenClothes({ data }) {
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
            src="/images/clothes2.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <h1 className={styles.heading}>Men Clothes</h1>

        <Products data={dataObj} />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

MenClothes.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
