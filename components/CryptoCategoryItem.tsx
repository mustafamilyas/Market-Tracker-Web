import React, {FC} from 'react'
import { Category } from '../constants/crypto';
import styles from './CryptoCategoryItem.module.css'
import { Icon } from './Icon';

interface Props {
  category: Category;
}

export const CryptoCategoryItem: FC<Props> = ({category}) => {
  return (
    <div className={styles.container}>
      {category.icon && <Icon Component={category.icon} className={styles.icon} />}
      <span>
        {category.category}
      </span>
    </div>
  )
}
