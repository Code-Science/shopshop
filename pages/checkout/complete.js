import Link from 'next/link';
import styles from '../../styles/components/CheckoutForm.module.css';

const CheckoutPage = () => {
  return (
    <div className={styles.purchaseComplete}>
      <h1 className={styles.heading}>Thankyou For Purchasing Our Product</h1>
      <Link href="/">
        <a>Continue Shoping</a>
      </Link>
    </div>
  );
};

export default CheckoutPage;
