import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { purple, red, white, lightPurp, gray } from '../utils/colors'
import TextButton from './TextButton'

export default class DisplayQuizQuestion extends Component{
  state = {
    display : 'question'
  }

  toggleDisplay = (value) => {
    this.setState({ display: value })
  }

  calcScore = (option) => {
    option === this.props.answer ? this.props.updateState('increment') : this.props.updateState('decrement')
  }

  render(){
    const { question, answer, explanation } = this.props

    return (
      <View>
          {this.state.display === 'question'
          ?
            <View>
              <Text>{question}</Text>
              <TouchableHighlight onPress={() => this.toggleDisplay('explanation')}>
              <Text>Answer</Text></TouchableHighlight>
            </View>
          :
            <View>
              <Text>{explanation}</Text>
              <TouchableHighlight onPress={() => this.toggleDisplay('question')}>
              <Text>Question</Text></TouchableHighlight>
            </View>
          }
          <TextButton label={"Correct"} onPress={() => this.calcScore('correct')}/>
          <TextButton label={"Incorrect"} onPress={() => this.calcScore('incorrect')}/>
      </View>
    )
  }
}
