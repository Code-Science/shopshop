import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Products.module.css';
import Product from './Product';

function Products({ data }) {
  if (data.error) {
    return <p className={styles.error}>Something Went Wrong! Server is Down</p>;
  }
  const products = data.map((item) => <Product key={item.id} item={item} />);
  return (
    <div className={styles.products}>
      {products}
      {products}
    </div>
  );
}

Products.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.objectOf(PropTypes.any),
  ]),
};

export default Products;
