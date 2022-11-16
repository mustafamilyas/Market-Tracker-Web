import React from 'react'
import { CRYPTO_CATEGORIES } from '../constants/crypto';
import styles from './CryptoCategories.module.css';
import { CryptoCategoryItem } from './CryptoCategoryItem';



export const CryptoCategories = () => {
  return (
    <div className={styles.container}>
      {
        CRYPTO_CATEGORIES.map((item) => (<CryptoCategoryItem category={item} key={item.category} />))
      }
    </div>
  )
}
