import classNames from 'classnames';
import React, {FC} from 'react'
import { Icon } from './Icon';
import IconDown from './icons/arrow_downward.svg';
import IconUp from './icons/arrow_upward.svg';
import styles from './VelocityText.module.css';

interface Props {
  value: number;
  className?: string;
}

export const VelocityText: FC<Props> = ({value, className}) => {
  const velocityIndicator =
    value > 0 ? <Icon Component={IconUp} className={styles.icon} /> :
    value < 0 ? <Icon Component={IconDown} className={styles.icon} /> : null;
  
  const classNameIndicator =
    value > 0 ? styles.success :
    value < 0 ? styles.danger: null;
  
  return (
    <div className={classNames(styles.container, classNameIndicator, className)}>
      {velocityIndicator}
      <span className={styles.value}>{value}</span>
    </div>
  )
}
