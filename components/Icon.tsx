import React, {FC, ComponentType, SVGProps} from 'react'

interface Props extends SVGProps<SVGSVGElement> {
  Component: ComponentType<SVGProps<SVGSVGElement>>
}

export const Icon: FC<Props> = ({Component, ...props}) => {
  return (
    <Component viewBox="0 0 48 48" fill='currentColor' {...props} />
  )
}
