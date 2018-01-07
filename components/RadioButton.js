import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function RadioButton({ id, label, radioState, selected }){
  return (
    <TouchableOpacity style={styles.radioInput} onPress={() => selected(id)}>
      <View style={styles.initialState}>
        {
          radioState
          ?
            <View style={styles.selected}/>
          :
            null
        }
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  initialState : {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected : {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: '#000'
  },
  radioInput : {
    minHeight: 40,
    width: 300,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  radioText: {
    marginLeft: 5
  }
})
