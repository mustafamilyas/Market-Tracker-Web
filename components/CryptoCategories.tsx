import React from 'react'
import styles from './CryptoCategories.module.css';
import { CryptoCategoryItem } from './CryptoCategoryItem';

const CRYPTO_CATEGORIES = [
  {
    category: 'Terbaru'
  },
  {
    category: 'DeFi'
  },
  {
    category: 'NFT/Gaming'
  },
  {
    category: 'CEX'
  },
  {
    category: 'DEX'
  },
  {
    category: 'Layer-1'
  },
  {
    category: 'Infrastructure'
  },
  {
    category: 'Lending'
  },
  {
    category: 'Layer-2'
  },
  {
    category: 'Ekosistem Stablecoin'
  },
]

export const CryptoCategories = () => {
  return (
    <div className={styles.container}>
      {
        CRYPTO_CATEGORIES.map((item) => (<CryptoCategoryItem category={item.category} key={item.category} />))
      }
    </div>
  )
}
