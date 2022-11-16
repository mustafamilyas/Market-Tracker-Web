import React, {FC} from 'react'
import Image from 'next/image'
import { VelocityText } from './VelocityText';


interface Props {
  imageUrl: string;
  name: string;
  color: string;
  token: string;
  day: string;
  week: string;
  month: string;
  year: string;
}

export const MarketRow: FC<Props> = ({imageUrl, name, color, token, day, week, month, year}) => {
  return (
    <tr >
      <td>
        <Image src={imageUrl} alt={`logo of ${name}`} width={20} height={20}/>
      </td>
      <td>
        <div>
          {name}
          <span>{token}</span>
        </div>
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
