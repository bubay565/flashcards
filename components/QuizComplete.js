import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { purple, red } from '../utils/colors'
import TextButton from './TextButton'

export default function QuizComplete({ score, onReset, onReturn }) {
  {console.log('total score ', score)}
  return(
    <View style={styles.deck}>
        <Text style={{color: purple, fontSize: 45, alignSelf: 'center'}}>
          You scored a total of <Text style={{ color : red, fontWeight: 'bold' }}>{score}%</Text>.
        </Text>

        <View>
            <TextButton label={"Restart Quiz"} onPress={() => onReset()}/>
            <TextButton label={"Quiz Details"} onPress={() => onReturn()}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  deck: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
});
