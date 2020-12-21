import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/client';
import Header from '../../components/Header';
import styles from '../../styles/pages/Orders.module.css';

export default function Orders() {
  const [session] = useSession();
  const [data, setData] = useState(null);

  useEffect(async () => {
    if (session) {
      const customer = {
        customerEmail: session.user.email,
      };
      // setData(session.user.name);
      const responseData = await fetch('/api/getOrders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      });
      const response = await responseData.json();
      setData(response);
    }
  }, [session]);

  let items = <p>Data not Found.</p>;

  if (data && session) {
    items = data.map((item) => {
      return (
        <p key={item.id}>
          id={item.id} order_date={item.order_date} product_id={item.product_id}{' '}
          quantity={item.quantity}
        </p>
      );
    });
    if (data.length === 0) {
      items = <p>You dont have any orders.</p>;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>ShopShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className={styles.main}>
        <div className="orders">
          <h1>Your Orders</h1>
          <div className="orders__list">{items}</div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
