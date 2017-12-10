import React from 'react'
import { Text, View } from 'react-native'
import { purple } from '../utils/colors'

export default function QuizComplete({ score }) {
  {console.log('total score ', score)}
  return(
    <Text style={{color: purple, fontSize: 45, fontWeight: 'bold', alignSelf: 'center'}}>
      You scored a total of {score}%.
    </Text>
  )
}
