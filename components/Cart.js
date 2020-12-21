import React from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import CartItem from './CartItem';
import styles from '../styles/components/Cart.module.css';
import { useStateValue } from '../store/StateProvider';

function Cart({ show, close }) {
  const cartClass = classNames({
    [styles.cart]: true,
    [styles.show]: show,
  });

  const [{ basket }] = useStateValue();

  const totalPrice = () => {
    return basket.reduce((sum, curr) => {
      return sum + curr.price * curr.quantity;
    }, 0);
  };

  const items = basket.map((item) => {
    return (
      <CartItem
        key={item.id}
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        quantity={item.quantity}
      />
    );
  });

  return (
    <div className={cartClass}>
      <div className={styles.top}>
        <p>Your Cart</p>
        <button type="button" onClick={close} className={styles.cartBtn}>
          <CloseIcon style={{ fontSize: 30 }} />
        </button>
      </div>
      <div className={styles.selection}>
        <ul className={styles.cartList}>
          {items.length === 0 ? <p>Your cart is empty</p> : items}
        </ul>
      </div>
      <div className={styles.endSection}>
        <p>Special instructions for seller</p>
        <textarea className={styles.textarea}></textarea>
        <p>
          <span>Subtotal : </span>
          <strong className={styles.totalPrice}>
            £{totalPrice().toFixed(2)}
          </strong>
        </p>
      </div>
      <div>
        {basket.length > 0 ? (
          <Link href="/checkout">
            <a className={styles.checkoutBtn}>Check Out</a>
          </Link>
        ) : (
          <button type="button" disabled={true} className={styles.checkoutBtn}>
            Check Out
          </button>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  show: PropTypes.bool.isRequired,
  close: PropTypes.func,
};

export default Cart;
