import React from 'react'
import { useGetMarketChanges } from '../hooks/useGetMarketChanges';
import { MarketRow } from './MarketRow';
import styles from './MarketTable.module.css';

export const MarketTable = () => {
  const marketChanges = useGetMarketChanges();

  return (
    <table className={styles.container}>
      <thead>
        <tr>
          <th/>
          <th>
            Crypto
          </th>
          <th>
            Harga
          </th>
          <th>
            24 Jam
          </th>
          <th>1 MGG</th>
          <th>1 BLN</th>
          <th>1 THN</th>
        </tr>
      </thead>
      <tbody>
        {marketChanges.map((marketChange) => (
          <MarketRow
            key={marketChange.name}
            price={marketChange.latestPrice}
            name={marketChange.name ?? ''}
            color={marketChange.color ?? ''}
            imageUrl={marketChange.logo ?? ''}
            day={marketChange.day ?? ''}
            week={marketChange.week ?? ''}
            month={marketChange.month ?? ''}
            year={marketChange.year ?? ''}
            token={marketChange.currencySymbol ?? ''}
          />))
        }
      </tbody>
    </table>
  )
}
