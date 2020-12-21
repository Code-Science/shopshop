import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/components/ImgLinks.module.css';

function ImgLinks() {
  return (
    <div className={styles.bottomCollection}>
      <Link href="/collection/women/clothes">
        <a className={styles.image}>
          jhghjgj
          <Image
            src="/images/bottomPic1.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>
      <Link href="/collection/women/accessories">
        <a className={styles.image}>
          jhghjgj
          <Image
            src="/images/bottomPic2.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>
      <Link href="/collection/men/clothes">
        <a className={styles.image}>
          jhghjgj
          <Image
            src="/images/bottomPic3.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>
      <Link href="/collection/women/accessories">
        <a className={styles.image}>
          jhghjgj
          <Image
            src="/images/bottomPic4.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>
      <Link href="/collection/kids/clothes">
        <a className={styles.image}>
          jhghjgj
          <Image
            src="/images/bottomPic5.jpg"
            alt="home banner"
            objectFit="cover"
            layout="fill"
          />
        </a>
      </Link>
    </div>
  );
}

export default ImgLinks;
