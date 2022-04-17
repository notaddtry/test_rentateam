import React from 'react'

import Logo from '../UI/Logo'

import styles from './layout.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__content}>
        <ul className={styles.footer__content_list}>
          <span className={styles.ul__title}>Раздел 1</span>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
        </ul>
        <ul className={styles.footer__content_list}>
          <span className={styles.ul__title}>Раздел 1</span>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
        </ul>
        <Logo
          height={'72px'}
          width={'32px'}
          top={'0'}
          left={'calc(50% - 80px)'}
        />
        <div className={styles.footer__content_img}></div>
        <ul className={styles.footer__content_list}>
          <span className={styles.ul__title}>Раздел 1</span>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
        </ul>
        <ul className={styles.footer__content_list}>
          <span className={styles.ul__title}>Раздел 1</span>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
          <li>Подраздел</li>
        </ul>
      </div>
      <div className={styles.footer_social}>
        <div className={styles.footer__media_content}>
          <div className={styles.footer__media_item}>
            <div
              className={`${styles.footer_media_img} ${styles.footer_media_vk}`}
            />
          </div>
          <div className={styles.footer__media_item}>
            <div
              className={`${styles.footer_media_img} ${styles.footer_media_fb}`}
            />
          </div>
          <div className={styles.footer__media_item}>
            <div
              className={`${styles.footer_media_img} ${styles.footer_media_twitter}`}
            />
          </div>
          <div className={styles.footer__media_item}>
            <div
              className={`${styles.footer_media_img} ${styles.footer_media_ok}`}
            />
          </div>
        </div>
        <div className={styles.footer__media_download}>
          <div
            className={`${styles.footer__media_download_item} ${styles.footer__media_google_play}`}
          />
          <div
            className={`${styles.footer__media_download_item} ${styles.footer__media_app_store}`}
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
