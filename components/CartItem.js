import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/components/Cart.module.css';
import { useStateValue } from '../store/StateProvider';

function CartItem({ id, price, image, title, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const addOneMore = () => {
    // dispatch the item to the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
      },
    });
  };

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };

  return (
    <li className={styles.cartItem}>
      <div className={styles.details}>
        <div className={styles.imgBox}>
          <img src={image} alt={title} className={styles.img} />
        </div>
        <div className={styles.title}>
          <p>{title}</p>
          <p> color: blue</p>
        </div>
      </div>
      <div className={styles.priceDetails}>
        <div>
          <p className={styles.small}>Price</p>
          <p>${price}</p>
        </div>
        <div>
          <p className={styles.small}>Quantity</p>
          <div className={styles.btns}>
            <button
              type="button"
              className={styles.minus}
              onClick={removeFromBasket}
            >
              -
            </button>
            <p>{quantity}</p>
            <button type="button" className={styles.plus} onClick={addOneMore}>
              +
            </button>
          </div>
        </div>
        <div>
          <p className={styles.small}>Total</p>
          <p>${(quantity * price).toFixed(2)}</p>
        </div>
      </div>
    </li>
  );
}
CartItem.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.string,
  quantity: PropTypes.number,
};

export default CartItem;
