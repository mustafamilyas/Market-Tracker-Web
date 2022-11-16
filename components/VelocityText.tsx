import React, {FC} from 'react'
import IconDown from './icons/arrow_downward.svg';
import IconUp from './icons/arrow_upward.svg';

interface Props {
  value: number;
}

export const VelocityText: FC<Props> = ({value}) => {
  const velocityIndicator = value > 0 ? <IconUp/> : value === 0 ? null : <IconDown/>;
  return (
    <div className="container">
      {velocityIndicator}
      <span className="number">{value}</span>
    </div>
  )
}
