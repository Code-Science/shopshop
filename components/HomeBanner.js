import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/HomeBanner.module.css';

function HomeBanner() {
  return (
    <div className={styles.homeBanner}>
      <ul className={styles.images}>
        <li className={styles.image}>
          <Image
            src="/images/homebanner1.jpeg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </li>
        <li className={styles.image}>
          <Image
            src="/images/homebanner2.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </li>
        <li className={styles.image}>
          <Image
            src="/images/homebanner3.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </li>
        <li className={styles.image}>
          <Image
            src="/images/homebanner4.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </li>
        <li className={styles.image}>
          <Image
            src="/images/homebanner5.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </li>
      </ul>
      <div className={styles.shade}>
        <ul className={styles.textBox}>
          <li className={styles.text}>
            MODERN Fashion Craze{' '}
            <Link href="/collection/women/accessories">
              <a className={styles.shopBtn}>
                <br />
                Shop now
              </a>
            </Link>
          </li>
          <li className={styles.text}>
            ELEGENT New Collection{' '}
            <Link href="/collection/women/accessories">
              <a className={styles.shopBtn}>
                <br />
                Shop now
              </a>
            </Link>
          </li>
          <li className={styles.text}>
            WINTER New Season{' '}
            <Link href="/collection/women/clothes">
              <a className={styles.shopBtn}>
                <br />
                Shop now
              </a>
            </Link>
          </li>
          <li className={styles.text}>
            MENSWEAR New Collection{' '}
            <Link href="/collection/men/accessories">
              <a className={styles.shopBtn}>
                <br />
                Shop now
              </a>
            </Link>
          </li>
          <li className={styles.text}>
            Kids New Designs{' '}
            <Link href="/collection/kids/clothes">
              <a className={styles.shopBtn}>
                <br />
                Shop now
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeBanner;
