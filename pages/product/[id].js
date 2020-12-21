import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import dynamic from 'next/dynamic';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import styles from '../../styles/pages/ProductPage.module.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import { useStateValue } from '../../store/StateProvider';
import { getAllProductIds } from '../../lib/products';
import { excuteQuery } from '../../lib/db';

// dynamic imports of named exports (because it depends on browser's window object)
const Splide = dynamic(
  () => {
    return import('@splidejs/react-splide').then((mod) => mod.Splide);
  },
  { ssr: false }
);

const SplideSlide = dynamic(
  () => {
    return import('@splidejs/react-splide').then((mod) => mod.SplideSlide);
  },
  { ssr: false }
);

export async function getStaticPaths() {
  let paths;
  try {
    paths = await getAllProductIds();
  } catch (error) {
    throw Error(error.message);
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let data;
  try {
    const result = await excuteQuery({
      query: `SELECT *, Products.id as pid FROM Products, Categories WHERE Products.id=${params.id} && Categories.id=Products.category_id;`,
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

export default function ProductPage({ data }) {
  const dataObj = JSON.parse(data);
  const [visibleImages, setVisibility] = useState(false);
  const [{ basket }, dispatch] = useStateValue();
  const [addToCartAnimation, setAnimation] = useState(false);

  const cartMessageClass = classNames({
    [styles.cartMessage]: true,
    [styles.animate]: addToCartAnimation,
    [styles.stopAnimation]: !addToCartAnimation,
  });

  const addToBasket = () => {
    // dispatch the item to the data layer
    setAnimation(true);
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: dataObj[0].pid,
        title: dataObj[0].product_name,
        image: dataObj[0].image1,
        price: dataObj[0].price,
        quantity: 1,
      },
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibility(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    let timeout;
    if (addToCartAnimation) {
      timeout = setTimeout(() => {
        setAnimation(false);
      }, 5000);
    }
    return () => clearTimeout(timeout);
  }, [addToCartAnimation]);

  return (
    <div className={styles.container}>
      <Head>
        <title>ShopShop</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <link rel="icon" href="/favicon.ico" />

        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@splidejs/splide@latest/dist/css/splide.min.css"
        ></link> */}
      </Head>

      <header>
        <Header />
      </header>
      <main className={styles.productPage}>
        <div className={styles.productPageNav}>
          <Link href="/">
            <a className={styles.productPageNavItem}>Home</a>
          </Link>
          <ArrowForwardIosIcon style={{ fontSize: 9 }} />
          <Link
            href={`/collection/${dataObj[0].category_for.toLowerCase()}/${dataObj[0].category.toLowerCase()}`}
          >
            <a className={styles.productPageNavItem}>
              {dataObj[0].category_for} {dataObj[0].category}
            </a>
          </Link>
          <ArrowForwardIosIcon style={{ fontSize: 9 }} />
        </div>
        <div
          className={styles.productPageFigure}
          style={{ display: visibleImages ? 'block' : 'none' }}
        >
          <Splide>
            <SplideSlide>
              <img
                src={dataObj[0].image1}
                alt="Something went wrong"
                className={styles.productPageImg}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={dataObj[0].image2}
                alt="Something went wrong"
                className={styles.productPageImg}
              />
            </SplideSlide>
            <SplideSlide>
              <img
                src={dataObj[0].image3}
                alt="Something went wrong"
                className={styles.productPageImg}
              />
            </SplideSlide>
          </Splide>
        </div>
        <h1 className={styles.productPageHeading}>{dataObj[0].product_name}</h1>
        <div className={styles.productPageDetails}>
          <p className={styles.productPagePrice}>
            <strong>Price: </strong>£{dataObj[0].price}
          </p>
          <div className={styles.BtnMargin}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={addToBasket}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </main>
      <aside className={cartMessageClass}>item added to cart</aside>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

ProductPage.propTypes = {
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
