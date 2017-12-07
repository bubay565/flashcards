import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { saveDeckTitle } from '../utils/helpers'
import { orange } from '../utils/colors'

export default class NewCard extends Component{
  state = {
    question : 'Enter Question',
    answer: 'Enter Answer'
  }

  addNewCard = (deck, card) => {
    saveDeckTitle(deckTitle)
    this.setState({
      question : 'Enter Question',
      answer: 'Enter Answer'
    })
  }

  render(){
    return(
      <View>
        <Text>Question</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
        />
        <Button
          onPress={() => this.addNewCard()}
          title="Submit"
          color={orange}
        />
      </View>
    )
  }
}
