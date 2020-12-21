import React from 'react';
import styles from '../styles/components/CheckoutForm.module.css';
import { useStateValue } from '../store/StateProvider';

const OrderSummary = () => {
  const [{ basket }] = useStateValue();

  const totalPrice = () => {
    return basket.reduce((sum, curr) => {
      return sum + curr.price * curr.quantity;
    }, 0);
  };

  return (
    <div className={styles.orderSummary}>
      <div className={styles.divider}></div>
      <div>
        <h1 className={styles.orderSummaryHeading}>Order Summary</h1>
        <div className={styles.orderSummaryDetails}>
          <h3>Standard Delivery Charges</h3>
          <p>£10.00 per 5kg</p>
          <hr></hr>
          <h3>Today's charge: £{totalPrice().toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
