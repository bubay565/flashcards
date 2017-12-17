import React from 'react'
import { Text } from 'react-native'
import * as colours from '../utils/colors'

export default function DeckHeader({ title, colour }) {
  return(
    <Text style={{color: colours[colour], fontSize: 50, fontWeight: 'bold', alignSelf: 'center'}}>
      {title}
    </Text>
  )
}
