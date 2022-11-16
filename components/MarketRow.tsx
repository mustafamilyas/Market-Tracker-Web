import React, {FC} from 'react'
import Image from 'next/image'
import styles from './MarketRow.module.css';
import { VelocityText } from './VelocityText';
import { formatCurrency } from '../utils/currency';
import classNames from 'classnames';

interface Props {
  imageUrl: string;
  name: string;
  color: string;
  token: string;
  day: string;
  week: string;
  month: string;
  year: string;
  price: string;
}

export const MarketRow: FC<Props> = ({imageUrl, name, color,price, token, day, week, month, year}) => {
  const trendByDay = parseFloat(day);
  const priceClassName = trendByDay > 0 ? styles.priceUp : trendByDay < 0 ? styles.priceDown : undefined;
  
  return (
    <tr className={styles.container}>
      <td className={styles.colLogo}>
        <Image src={imageUrl} alt={`logo of ${name}`} width={32} height={32}/>
      </td>
      <td>
        <div className={styles.colName}>
          {name}
          <span className={styles.token}>{token}</span>
        </div>
      </td>
      <td className={styles.colPrice}>
        <span className={classNames(styles.animateBlinkColor, priceClassName)} key={price}>
          {formatCurrency(parseInt(price))}
        </span>
        <span className={styles.velocityMobile}>
          <VelocityText value={Boolean(day) ? parseFloat(day) : 0} />
        </span>
      </td>
      <td>
        <VelocityText value={Boolean(day) ? parseFloat(day) : 0}/>
      </td>
      <td>
        <VelocityText value={Boolean(week) ? parseFloat(week) : 0}/>
      </td>
      <td>
        <VelocityText value={Boolean(month) ? parseFloat(month) : 0}/>
      </td>
      <td>
        <VelocityText value={Boolean(year) ? parseFloat(year) : 0}/>
      </td>
    </tr>
  )
}
