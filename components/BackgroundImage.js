import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/BackgroundImage.module.css';

function BackgroundImage() {
  return (
    <div className={styles.backgroundImage}>
      <Image
        src="/images/backimg.jpg"
        alt="home banner"
        objectFit="cover"
        layout="fill"
      />
      <div className={styles.shade}>
        <p className={styles.text}>
          Discover Yourself{' '}
          <Link href="/collection/women/accessories">
            <a className={styles.shopBtn}>
              <br />
              Accessories
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default BackgroundImage;
