import React, {FC} from 'react'
import styles from './CryptoCategoryItem.module.css'

interface Props {
  category: string;
}

export const CryptoCategoryItem: FC<Props> = ({category}) => {
  return (
    <div className={styles.container}>{category}</div>
  )
}
