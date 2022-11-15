import classNames from 'classnames';
import React, {FC} from 'react'
import styles from './SearchInput.module.css';

interface SearchInputProps {
  className?: string;
}

export const SearchInput: FC<SearchInputProps> = ({className}) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        name=""
        id=""
        className={classNames(styles.input, className)}
        placeholder="Cari aset di Pintu..."
      />
    </div>
  )
}
