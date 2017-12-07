import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, red, white } from '../utils/colors'

export default function TextButton ({ label, onPress }) {
  return(
    <TouchableOpacity style={styles.buttonn} onPress={onPress}>
      <Text style={styles.reset}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    fontSize: 35,
    color: white,
    backgroundColor: purple
  },
  buttonn: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1
  }
})
