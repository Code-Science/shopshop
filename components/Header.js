import React, { useState } from 'react';
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import { signIn, signOut, useSession } from 'next-auth/client';
import Nav from './Nav';
import Cart from './Cart';
import Backdrop from './Backdrop';
import { useStateValue } from '../store/StateProvider';
import styles from '../styles/components/Header.module.css';

function Header() {
  const [session] = useSession();
  const [openNav, setNav] = useState(false);
  const [showCart, setCart] = useState(false);
  const [{ basket }] = useStateValue();

  const openOrCloseNav = () => {
    setNav((prevState) => !prevState);
  };

  const showCartHandler = () => {
    setCart(true);
  };

  const closeCartHandler = () => {
    setCart(false);
  };

  const totalBasketItems = () => {
    return basket.reduce((sum, curr) => {
      return sum + curr.quantity;
    }, 0);
  };

  return (
    <div className={styles.header}>
      <div className={styles.auth}>
        {!session && (
          <button type="button" className={styles.items} onClick={signIn}>
            Sign In
          </button>
        )}
        {session && (
          <>
            <p className={styles.items}>{session.user.name}</p>
            <button type="button" className={styles.items} onClick={signOut}>
              SIGN OUT
            </button>
            <Link href="/accounts/orders">
              <a className={styles.items}>orders</a>
            </Link>
          </>
        )}
      </div>
      <div className={styles.mainHead}>
        <div className={styles.menu} onClick={openOrCloseNav}>
          <MenuIcon style={{ fontSize: 30 }} />
        </div>
        <div>
          <Link href="/">
            <a className={styles.logo}>ShopShop</a>
          </Link>
        </div>
        <div className={styles.nav}>
          <Nav open={openNav} />
          <div className={styles.cart} onClick={showCartHandler}>
            <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
            {basket.length > 0 ? (
              <p className={styles.cartCount}>{totalBasketItems()}</p>
            ) : null}
          </div>
        </div>
      </div>
      <Cart show={showCart} close={closeCartHandler} />
      <Backdrop show={showCart} click={closeCartHandler} />
    </div>
  );
}

export default Header;
