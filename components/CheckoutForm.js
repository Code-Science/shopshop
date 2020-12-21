import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import { useStateValue } from '../store/StateProvider';
import styles from '../styles/components/CheckoutForm.module.css';

const CheckoutForm = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (basket.length > 0) {
      setProcessing(true);

      const customerData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        postcode: document.getElementById('postcode').value,
        basket,
      };

      const responseData = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(basket),
      });
      const response = await responseData.json();

      if (response?.clientSecret) {
        await stripe
          .confirmCardPayment(response.clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          })
          .then(async (result) => {
            if (result.error) {
              setError(result.error.message);
            } else if (result.paymentIntent) {
              // paymentIntent = payment confirmation

              // add user to sql database
              customerData.order = {
                paymentIntent_id: result.paymentIntent.id,
                amount: result.paymentIntent.amount,
                created: result.paymentIntent.created,
              };
              const customerSavingResponse = await fetch('api/createCustomer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(customerData),
              });

              const data = await customerSavingResponse.json();
              if (data.error) setError(data.error);
              // should handle error here but check backendfirst

              setSucceeded(true);
              setError(null);
              setProcessing(false);

              dispatch({
                type: 'EMPTY_BASKET',
              });

              router.replace('/');
            }
          });
      } else {
        setError('Something went wrong, No payment information!');
      }
    } else {
      setError('No Item Selected, Empty Basket!');
    }
  };

  const handleChange = (e) => {
    // listen for changes in the cardEle..
    setDisabled(e.empty);
    setError(e.error ? e.error.message : '');
  };

  const cardOptions = {
    iconStyle: 'solid',
    style: {
      base: {
        iconColor: '#1890ff',
        color: 'rgba(0, 0, 0, 0.65)',
        fontWeight: 500,
        fontFamily: 'Segoe UI, Roboto, Open Sans, , sans-serif',
        fontSize: '15px',
        fontSmoothing: 'antialiased',
        ':-webkit-autofill': { color: '#fce883' },
        '::placeholder': { color: '#bfbfbf' },
      },
      invalid: {
        iconColor: '#ffc7ee',
        color: '#ffc7ee',
      },
    },
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        required
        id="name"
        label="Name"
        variant="outlined"
        className={styles.input}
      />
      <TextField
        required
        id="email"
        label="Email"
        variant="outlined"
        type="email"
        className={styles.input}
      />
      <TextField
        required
        id="postcode"
        label="Postcode"
        helperText="Must contain 7 letters or digits"
        variant="outlined"
        className={styles.input}
        inputProps={{ maxLength: 8, minLength: 8 }}
      />
      <CardElement options={cardOptions} onChange={handleChange} />

      <button
        type="button"
        className={styles.checkoutBtn}
        disabled={processing || disabled || succeeded}
      >
        <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};
export default CheckoutForm;
