import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/components/Product.module.css';

function Product({ item }) {
  const [imageUrl, setUrl] = useState(
    item?.image1 ? item.image1 : '/images/bottomPic1.jpg'
  );

  return (
    <div className={styles.product}>
      <figure
        className={styles.figure}
        onMouseEnter={() => setUrl(item.image2)}
        onMouseLeave={() => setUrl(item.image1)}
      >
        <img src={imageUrl} alt="home banner" className={styles.img} />
      </figure>
      <div className={styles.details}>
        <p className={styles.name}>{item.product_name}</p>
        <p className={styles.price}>£{item.price}</p>
        <Link href={`/product/${item.id}`}>
          <a className={styles.productBtn}>Details</a>
        </Link>
      </div>
    </div>
  );
}

Product.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Product;
