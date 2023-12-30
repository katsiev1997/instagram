import React, { FC } from 'react'
import { Flex, FlexProps } from './Flex'
type HStackProps = Omit<FlexProps , 'direction'>

export const HStack: FC<HStackProps> = ({...rest}) => {
  return (
    <Flex direction='row' {...rest}>

    </Flex>
  )
}