import React from 'react';
import Link from 'next/link';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.section}>
          <p className={styles.footerHeading}>Customer Care</p>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.navigation}>CONTACT US</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navigation}>STORE LOCATION</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navigation}>CAREERS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navigation}>TERMS OF USE</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navigation}>RETURNS</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className={styles.navigation}>PRIVACY POLICY</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.section}>
          <p className={styles.footerHeading}>About</p>
          <div className={styles.about}>
            <p className={styles.name}>Shopshop</p>
            <p>Curators of ethical fashion and New shopshop designed.</p>
            <p>
              Shopshop is a destination for style seekers. Located in xyzton's
              boutique xyz Village, shopshop is lovingly and carefully lorem
              lorem lorem . Dedicated to stylish designed, ethical fashion and
              accessories- shopshop lorem lorem is a beautiful style edit.
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.footerHeading}>Newsletter</p>
          <p className={styles.newsletter}>Join our mailing list</p>
          <form className={styles.form}>
            <input
              type="text"
              placeholder="your@email.com"
              className={styles.input}
            />
            <button type="button" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.icons}>
          <FacebookIcon style={{ fontSize: 30 }} />
          <TwitterIcon style={{ fontSize: 30 }} />
          <InstagramIcon style={{ fontSize: 30 }} />
        </div>
        <div className={styles.copyright}>Copyright © Shopshop 2020</div>
      </div>
    </>
  );
}

export default Footer;
