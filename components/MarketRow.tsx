import React, {FC} from 'react'
import Image from 'next/image'
import styles from './MarketRow.module.css';
import { VelocityText } from './VelocityText';
import { formatCurrency } from '../utils/currency';

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
        {formatCurrency(parseInt(price))}
        <VelocityText value={Boolean(day) ? parseFloat(day) : 0} className={styles.velocityMobile} />
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
