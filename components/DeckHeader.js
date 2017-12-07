import React from 'react'
import { Text } from 'react-native'
import { purple } from '../utils/colors'

export default function DeckHeader({ title }) {
  return(
    <Text style={{color: purple, fontSize: 45, fontWeight: 'bold', alignSelf: 'center'}}>
      {title}
    </Text>
  )
}
