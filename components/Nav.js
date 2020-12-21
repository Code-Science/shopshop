import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from '../styles/components/Nav.module.css';

function Nav({ open }) {
  const [womenLinks, setWLinks] = useState(false);
  const [menLinks, setMLinks] = useState(false);

  const [startAnimation, setAnimation] = useState(false);

  const showOrHideLinks = (event, linksFor) => {
    if (window && window.innerWidth > 900) {
      if (linksFor === 'women') {
        setWLinks((prevState) => !prevState);
        setMLinks(false);
      } else {
        setWLinks(false);
        setMLinks((prevState) => !prevState);
      }
      return;
    }
    if (linksFor === 'women') {
      setWLinks((prevState) => !prevState);
    } else {
      setMLinks((prevState) => !prevState);
    }
  };

  useEffect(() => {
    if (open) setAnimation(true);
  }, [open]);

  const navPopupClassW = classNames({
    [styles.navPopup]: true,
    [styles.open]: womenLinks,
  });

  const navPopupClassM = classNames({
    [styles.navPopup]: true,
    [styles.open]: menLinks,
  });

  const nav = classNames({
    [styles.nav]: true,
    [styles.openNav]: open,
    [styles.closeNav]: !open && startAnimation,
  });

  return (
    <div className={nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <button
            type="button"
            className={styles.navName}
            onClick={(event) => showOrHideLinks(event, 'women')}
          >
            WOMEN
          </button>
          <span className={navPopupClassW}>
            <Link href="/collection/women/clothes">
              <a className={styles.popupItems}>Clothes</a>
            </Link>
            <Link href="/collection/women/accessories">
              <a className={styles.popupItems}>Accessories</a>
            </Link>
          </span>
        </li>
        <li className={styles.navItem}>
          <button
            type="button"
            className={styles.navName}
            onClick={(event) => showOrHideLinks(event, 'men')}
          >
            MEN
          </button>
          <span className={navPopupClassM}>
            <Link href="/collection/men/clothes">
              <a className={styles.popupItems}>Clothes</a>
            </Link>
            <Link href="/collection/men/accessories">
              <a className={styles.popupItems}>Accessories</a>
            </Link>
          </span>
        </li>
        <li className={styles.navItem}>
          <Link href="/collection/kids/clothes">
            <a className={styles.items}>KIDS</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/">
            <a className={styles.items}>CONTACT</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

Nav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Nav;
