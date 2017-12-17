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
    const { question, answer, explanation, questionNum, numQuestions } = this.props

    return (
      <View style={styles.deck}>
          <Text>Question {questionNum} of {numQuestions}</Text>
          {this.state.display === 'question'
          ?
            <View>
              <Text style={styles.question}>{question}</Text>
              <TouchableHighlight onPress={() => this.toggleDisplay('explanation')} >
              <Text style={styles.link}>Answer</Text></TouchableHighlight>
            </View>
          :
            <View>
              <Text style={styles.question}>{explanation}</Text>
              <TouchableHighlight onPress={() => this.toggleDisplay('question')} >
              <Text style={styles.link}>Question</Text></TouchableHighlight>
            </View>
          }
          <View>
              <TextButton label={"Correct"} onPress={() => this.calcScore('correct')}/>
              <TextButton label={"Incorrect"} onPress={() => this.calcScore('incorrect')}/>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    color: gray,
    fontSize: 40,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  link: {
    color: red,
    fontSize: 15,
    alignSelf: 'center'
  },
  deck: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'space-around'
  }
});
