import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button, PickerIOS } from 'react-native'
import { addCardToDeck } from '../utils/helpers'
import { orange, gray, red } from '../utils/colors'

export default class NewCard extends Component{
  state = {
    question : 'Enter Question',
    answer: 'Enter Answer'
  }

  addNewCard = (deck, card) => {
    addCardToDeck(deck)
    this.setState({
      question : 'Enter Question',
      answer: 'Enter Answer'
    })
  }

  render(){
    return(
      <View style={styles.deck}>
        <Text style={styles.title}>Enter card details below</Text>
        <View>
          <Text>Question</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
          />
        </View>

        <View>
          <Text>Explanation</Text>
          <TextInput
            style={styles.textInput}
            multiline={true}
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
          />
        </View>

        <View>
          <Text>Answer</Text>
          <PickerIOS style={styles.textInput}>
              <PickerIOS.Item label="Java" value="java" />
              <PickerIOS.Item label="JavaScript" value="js" />
          </PickerIOS>
        </View>
        <Button
          onPress={() => this.addNewCard()}
          title="Submit"
          color={orange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: red,
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10
  },
  textInput : {
    minHeight: 40,
    width: 380,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10
  },
  deck: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});
