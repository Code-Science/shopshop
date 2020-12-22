import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../../components/CheckoutForm';
import OrderSummary from '../../components/OrderSummary';
import styles from '../../styles/components/CheckoutForm.module.css';

const CheckoutPage = () => {
  const stripePromise = loadStripe(`${process.env.stripePublicKey}`);
  return (
    <div className={styles.checkout}>
      checkout
      <div className={styles.stripeForm}>
        <h1 className={styles.orderSummaryHeading}>CHECKOUT</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <OrderSummary />
      </div>
    </div>
  );
};

export default CheckoutPage;
